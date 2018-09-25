const http = require('http');
const url = require('url');
const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');

const startServer = port => {

  const server = http.createServer((request, response) => {
    debugger
    // Get route from the request
    const parsedUrl = url.parse(request.url);
    const parsedUrlAsId = parsedUrl.query;
    // Get router function
    const func = router[parsedUrl.pathname] || router[parsedUrlAsId.id] || router.default;
    
    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;