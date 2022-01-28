const config = require("./config");
const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

const io = require("./backend/io").initialize(server, {
  cors: {
    origin: "*", // for testing
  },
});

require("./backend/websocket").initialize(server);

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));

// use PUGS api routes
// MUST be above catchall * route
app.use("/pugs", require("./backend/PUGSAPI"));

app.use("/api", require("./backend/simulatorAPI"));

// serve built React apps from frontend/dist/
const staticDir = `${__dirname}/frontend/dist/`;
app.use(express.static(staticDir));
app.get("*", (req, res) => {
  res.sendFile(`${staticDir}/index.html`);
});

// handle socket io connections
io.on(config.socketEvents.CONNECT, require("./backend/socketHandler").handle);

var listener = server.listen(process.env.PORT || config.PORT, () => {
  console.log("Server started at port: " + listener.address().port);
});
