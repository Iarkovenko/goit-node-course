const fs = require("fs");
const shortId = require("shortid");
const util = require("util");

const userFolder = "../../../../data/users/all-users.json";

const appendFile = util.promisify(fs.writeFile);

const saveNewUser = (datas) => {
  const DB = fs.readFileSync(__dirname + userFolder, "utf8");

  const update = JSON.parse(DB)
  const add = update.push(datas);
  const dataStr = JSON.stringify(update);

  return appendFile(__dirname + userFolder, dataStr);
};

const postNewUser = (request, response) => {
  const user = request.body;

  const userData = Object.assign({}, user, { id: shortId() });

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
      error: "user was not saved"
    });
  };

  saveNewUser(userData)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = postNewUser;
