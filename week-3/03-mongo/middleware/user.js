const { User } = require("../db");

async function userMiddleware(req, res, next) {

    // console.log(req.headers);
    if (req.headers.username && req.headers.password) {
        let username = req.headers.username;
        let password = req.headers.password;
        console.log(username + " trying to access db as User");
        const userExist = await User.findOne({ username: username, password: password })

        if (userExist) {
            // console.log('inside',userExist);
            next()
        }
        else{
            return res.status(401).send({ message: "Invalid Username or Password" });
        }
    }
    else{
        return res.send({msg: 'Authorization failed'})
    }

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;