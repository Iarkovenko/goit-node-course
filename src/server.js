// import { get } from "https";

const http = require("http");
const url = require("url");
const morgan = require("morgan");
const router = require("./routes/router");

const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((request, response) => {
    // Get route from the request
    // debugger
    const parsedUrl = url.parse(request.url);
    console.log(request.method)
    if (request.method === "GET") {
      const func = router.GET[parsedUrl.pathname] || router.GET.default;

      logger(request, response, () => func(request, response));
    }

    if (request.method === "POST") {
      const func = router.POST[parsedUrl.pathname] || router.POST.default;

      logger(request, response, () => func(request, response));
    }
  
  });

  server.listen(port);
};

module.exports = startServer;
