# TileScad.org

Web interface for TileScad. Hosted on http://tilescad.org/.

## Testing Environment

1. Install package managers `npm` and `pip` (for JS and Python, respectively).
2. From the main directory, run `npm i` and `pip install -r requirements.txt` to install dependencies.
3. Run `npm run build` to build the frontend (use `npm run build-debug` to build with debugging). You'll need to run this everytime you make changes to the frontend.
4. Run `npm start` to start the server on `localhost:8080`.

## Architecture

React frontend, Flask Gunicorn backend
