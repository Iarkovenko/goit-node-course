const fs = require("fs");
const path = require("path");

const getAllProducts = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(obj));
  response.end();
};

module.exports = getAllProducts;
