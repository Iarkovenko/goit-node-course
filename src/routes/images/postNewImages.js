const fs = require("fs");
const postNewImages = (request, response) => {
  var newImg = "";

  request.on("data", function(data) {
    newImg = JSON.parse(data);
    const obj = JSON.parse(data);
    const asdasd = fs.readFile(
      __dirname + `../../../../products/${obj.idProduct}.json`,
      (err, data) => {
        const json = JSON.parse(data);
        json.imageSrc = obj.imageSrc;
        console.log(json);
        fs.writeFile(
          __dirname + `../../../../products/${obj.idProduct}.json`,
          JSON.stringify(json),
          err => {
            if (err) throw err;
            console.log("Saved!");
          }
        );
      }
    );
  });
  request.on("end", function() {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.write(
      JSON.stringify({
        status: "success",
        imageSrc: newImg.imageSrc
      }),
    );
    response.end();
  });
};

module.exports = postNewImages;
