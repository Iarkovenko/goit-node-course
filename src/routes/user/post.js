const User = require("../../db/schemas/user")

const createUser = (request, response) => {
    const user = request.body;
    const userData = Object.assign({}, user)

    const newUser = new User(userData);

    const sendResponse = (user) => {
        response.json({
            status: "success",
            user
        })
    }
    const sendError = () => {
        response.status(400);
        response.json({
            error: 'user was not saved'
          });
    }

    newUser.save()
        .then(sendResponse)
        .catch(sendError)

}

module.exports = createUser;