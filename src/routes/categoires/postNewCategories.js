const fs = require("fs");
const shortId = require("shortid");
const validationPostData = require("../helpers/validationPostData");

const postNewCategories = (request, response) => {
  var requireFiled = ["name", "description"];
  let newCategory = "";
  var missingCategory = "";
  request.on("data", function(data) {
    const check = validationPostData(requireFiled, JSON.parse(data));
    if (check.length !== 0) {
      missingCategory = check;
    } else {
      newCategory = JSON.parse(data);
      const obj = JSON.parse(data);
      obj.id = shortId();
      fs.writeFile(
        __dirname + `../../../../data/categories/${obj.name}.json`,
        JSON.stringify(obj),
        err => {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    }
  });

  request.on("end", function() {
    if (missingCategory.length !== 0) {
      response.writeHead(424, {
        "Content-Type": "text/html"
      });
      response.write(
        "ERROR You are missing the next fields:" +
          " " +
          missingCategory.join(" ")
      );
      response.end();
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.write(
        JSON.stringify({
          status: "success",
          category: {
            name: newCategory.name,
            description: newCategory.description
          }
        })
      );
      response.end();
    }
  });
};

module.exports = postNewCategories;
