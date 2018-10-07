const fs = require("fs");

const postNewCategories = (request, response) => {
    let newCategory = ''
    request.on("data", function (data) {

        // need to add function has create a Uniqe ID for catergories 
        //PS. Short id was install 8.10 at 0:17 AM
        newCategory = JSON.parse(data);
        const obj = JSON.parse(data);
        fs.writeFile(__dirname + `../../../../data/categories/${obj.name}.json`, data, err => {
            if (err) throw err;
            console.log("Saved!");
        });
    });

    request.on("end", function () {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(JSON.stringify({
            'status': "success",
            'user': {
                "name": newCategory.name,
                "description": newCategory.description,
            }
        }));
        response.end();
    });
}

module.exports = postNewCategories