const http = require("http");
const url = require("url");
const router = require("./router");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  router({ method: req.method, path, res: res });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
