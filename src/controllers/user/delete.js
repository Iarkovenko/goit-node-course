const User = require("../../models/user");

const deleteUser = (req, res) => {
    const id = req.params.id;
    
    const sendResponse = (user) => {
        res.status(200);
        res.send("user was delete with ID ");
    }

    User
        .findById(id)
        .remove()
        .then(sendResponse)
        .catch( err => {
            console.log(err);
        })
}

module.exports = deleteUser;