const fs = require("fs")

const getUser = (request, response) => {
    const id = request.params.id;
    const fileDB = fs.readFileSync(__dirname + '../../../../data/users/all-users.json', 'utf8');
    const DB = JSON.parse(fileDB);
    const getUserById = DB.find(user => user.id === id);
    if (!getUserById) {
        response.set("Content-Type", "text/html");
  
        response.status(404);
        response.send('Not FInd');
    }
    
    response.set("Content-Type", "application/json");
  
    response.status(200);
    response.json(getUserById);
}

module.exports = getUser;
