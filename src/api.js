const http = require("http");
const { once } = require("events");

const PORT = 3000;
const DEFAULT_USER = {
  username: "Joaozin",
  password: "123",
};

const routes = {
  "/contact:get": (req, res) => {
    res.write("Contact Us Page");
    return res.end();
  },
  "/login:post": async (req, res) => {
    const { username, password } = JSON.parse(await once(req, "data"));

    const isUsernameDifferent =
      username.toLocaleLowerCase() !==
      DEFAULT_USER.username.toLocaleLowerCase();
    const isPasswordDifferent = password !== DEFAULT_USER.password;

    if (isUsernameDifferent || isPasswordDifferent) {
      res.writeHead(401);
      return res.end("Login failed");
      ß;
    }

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

/* 
    ROUTE LOGIN = curl -X POST --data '{"username": "Joaozin", "password": "123"}'  localhost:3000/login
    ROUTE CONTACT = curl localhost:3000/contact

*/
