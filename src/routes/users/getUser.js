const fs = require("fs");

const getUser = (request, response) => {
  const id = request.params.id;
    

//     const appendNewuser = (data) => {
//     fs.open("../../../../data/users/all-users.json", 'w');
    
//   }
  response.set("Content-Type", "application/json");
  response.status(200);
  response.json({ userId: id });
}

module.exports = getUser;

/**
 * 
 * const filePath = path.join(__dirname, '../../../', 'products', 'all-products.json');
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const artcile = obj.find(item => item.id === 19112831)

 */