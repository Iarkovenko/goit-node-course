const fs = require("fs");
const path = require("path");

const postNewProduct = (request, response) => {
  var newProduct = ''
  request.on("data", function(data) {
    newProduct = JSON.parse(data);
    const obj = JSON.parse(data);
    fs.writeFile(
      __dirname + `../../../../products/${obj.id}.json`,
      data,
      err => {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });

  request.on("end", function() {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.write(
      JSON.stringify({
        status: "success",
        product: {
          name: newProduct.name,
          description: newProduct.description,
          price: newProduct.price,
          currency: newProduct.currency,
          categories: newProduct.categories
        }
      })
    );
    response.end();
  });
};

module.exports = postNewProduct;
