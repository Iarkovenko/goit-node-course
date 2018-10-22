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

const appendNewuser = (data) => {
  const allUsersData = fs.readFile(__dirname + "../../../../data/users/all-users.json", 'a', (err, fd) => {
      if (err) throw err;
      console.log(JSON.parse(fd))
      // if (JSON.parse(fd.name) === data.name) {
      //   response.send('This Name is already exist')
      //   return;
      // };
      // fs.appendFile(fd, JSON.stringify(data), 'utf8', (err) => {
      //   fs.close(fd, (err) => {
      //     if (err) throw err;
      //   });
      //   if (err) throw err;
      // });
    }
  );
  // return allUsersData;
}

const postNewUser = (request, response) => {
  const user = request.body;

  const userData = Object.assign({}, user, {
    id: shortId()
  });
  
  fs.appendFile(__dirname + "../../../../data/users/all-users.json", 'asdasd', (err, fd) => {
    console.log(fd)
  })
  // const fileName = userData.name.toLowerCase() + "___" + userData.id;

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

  // const sendError = () => {
  //   response.status(400);
  //   response.json({
  //     error: 'user was not saved'
  //   });
  // };

  // saveNewUser(fileName, userData)
  //   .then(sendResponse)
  //   .catch(sendError);

};

module.exports = postNewUser;