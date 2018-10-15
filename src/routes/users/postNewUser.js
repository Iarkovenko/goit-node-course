const fs = require("fs");
const shortId = require("shortid");
const util = require("util");
// const validationPostData = require("../helpers/validationPostData");

const userFolder = "../../../../data/users";

const writeFile = util.promisify(fs.writeFile);

const saveNewUser = (filename, data) => {
  const src = `${userFolder}/${filename}.json`;
  const dataStr = JSON.stringify(data);
  return writeFile(__dirname + src, dataStr);
};

const postNewUser = (request, response) => {
  const user = request.body;

  const userData = Object.assign({}, user, { id: shortId() });
  
  const fileName = userData.name.toLowerCase() + "___" + userData.id;

  const sendResponse = () => {
    response.json({
      status: "success",
      user: {
        userName: userData.name,
        password: userData.password,
        tel: userData.phone,
        id: userData.id
      }
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not saved'
    });
  };

  saveNewUser(fileName, userData)
    .then(sendResponse)
    .catch(sendError);

};

module.exports = postNewUser;
