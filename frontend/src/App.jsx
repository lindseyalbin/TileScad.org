import React from "react";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import DesignPage from "./pages/design/Design";
import UploadPage from "./pages/upload/Upload";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/design" exact component={DesignPage} />
          <Route path="/upload" exact component={UploadPage} />
        </Switch>
      </Router>
      {/* <HomePage />
      <AboutPage />
      <DesignPage />
      <UploadPage /> */}
    </div>
  );
};
