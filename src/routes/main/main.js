const mainRoute = (request, response) => {
    response.set(200, {"Content-Type": "text/html"});
    response.send("<h1>Првиет!</h1>");
  };
  
  module.exports = mainRoute;
