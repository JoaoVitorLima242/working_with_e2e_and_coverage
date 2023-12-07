const http = require("http");

const PORT = 3000;

const handler = (req, res) => res.end("ok");

const app = http.createServer(handler).listen(PORT, () => console.log("Running at" + PORT));
