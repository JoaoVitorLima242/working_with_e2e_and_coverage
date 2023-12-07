const http = require("http");

const PORT = 3000;

const routes = {
  "/contact:get": (req, res) => {
    res.write("Contact Us Page");
    return res.end();
  },
  notFound: (req, res) => {
    res.writeHead(404);
    return res.end("Not found");
  },
};

const handler = (req, res) => {
  const { url, method } = req;

  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

  const chosen = routes[routeKey] || routes.notFound;

  return chosen(req, res);
};

const app = http
  .createServer(handler)
  .listen(PORT, () => console.log("Running at " + PORT));
