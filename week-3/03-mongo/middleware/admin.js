const { Admin } = require("../db");


// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    if (req.headers.username && req.headers.password) {
        let username = req.headers.username;
        let password = req.headers.password;
        console.log(username + " trying to access db as Admin");
        const userExist = await Admin.findOne({ username: username, password: password })

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
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;