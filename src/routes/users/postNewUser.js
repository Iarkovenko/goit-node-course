const fs = require("fs");
const path = require("path");

const postNewUser = (request, response) => {
  let newUser = ''
  request.on("data", function(data) {
    console.log(data)
    newUser = JSON.parse(data);
    const obj = JSON.parse(data);
    fs.writeFile(__dirname + `../../../../users/${obj.name}.json`, data, err => {
      if (err) throw err;
      console.log("Saved!");
    });
  });

  request.on("end", function() {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.write(JSON.stringify({
      'status': "success",
      'user': {
        "name": newUser.name,
        "phone": newUser.phone,
      }
    }));
    response.end();
  });
};

module.exports = postNewUser;
