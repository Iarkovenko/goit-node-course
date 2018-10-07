const fs = require('fs');
const path = require('path');

const allProducts = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  const fileDb = fs.readFileSync(filePath);
  const elem = fileDb[1]
  // const db = fileDb.find(item => item.id === Number(1911283))
  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  response.write(elem);
  response.end()
};

module.exports = allProducts;
// 1911283 fileDb[0].id