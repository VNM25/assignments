const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db");

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);
    let userExist = await Admin.findOne({username: username, password: password})
    if (userExist){
        return res.status(409).json('User already exists');
    }
    else{
        const admin = new Admin({
            username : username,
            password : password
        });
        admin.save();
        res.json({
            "msg": "User created Succesfully"
        })
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    

    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;