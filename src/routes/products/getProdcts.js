const fs = require("fs");
const path = require("path");

const getProduct = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const artcile = obj.find(item => item.id === 19112831)

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(artcile));
  response.end();
};

module.exports = getProduct;
