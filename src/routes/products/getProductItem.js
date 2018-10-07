// const fs = require('fs');
// const path = require('path');

// const getProductItem = (request, response) => {
//   const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
//   const db = fs.readFileSync(filePath);
//   const item = db.find( item => item.id === '19112831')
//   response.writeHead(200, {
//     'Content-Type': 'application/json',
//   });
//   response.write(item);
//   response.end()
// };

// module.exports = getProductItem;