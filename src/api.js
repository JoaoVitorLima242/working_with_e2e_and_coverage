const http = require("http");

const PORT = 3000;

const routes = {
    '/contact:get': (req, res) => {
        res.write('Contact Us Page')
        return res.end()
    },

}

const handler = (req, res) => {
  const { url, method } = req;

  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`

  const chosen = routes[routeKey]

  return chosen(req, res);
};

const app = http
  .createServer(handler)
  .listen(PORT, () => console.log("Running at " + PORT));
