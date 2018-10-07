const fs = require("fs");
const path = require("path");
const validateRequsetdata = require("../helpers/validationPostData")

const postNewProduct = (request, response) => {
  var newProduct = '';
  let missingKeys = '';
  request.on("data", function (data) {
    const check = validateRequsetdata(JSON.parse(data));
    
    if (check.length !== 0) {
      missingKeys = check;
    } else {
      const obj = JSON.parse(data);
      newProduct = JSON.parse(data);
      fs.writeFile(
        __dirname + `../../../../products/${obj.id}.json`,
        data,
        err => {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    }

  });

  request.on("end", function () {
    if (missingKeys.length !== 0) {
      response.writeHead(424, {
        "Content-Type": "text/html"
      });
      response.write("ERROR Your are missing the next field" + ' ' + missingKeys.join(', '));
      response.end();
    } else {
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
    }

  });
};

module.exports = postNewProduct;