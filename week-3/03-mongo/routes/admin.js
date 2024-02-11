const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username, password);
    let userExist = await Admin.findOne({username: username, password: password})
    if (userExist){
        return res.status(409).json('Admin already exists');
    }
    else{
        const admin = new Admin({
            username : username,
            password : password
        });
        admin.save();
        res.json({
            "msg": "Admin created Succesfully"
        })
    }
});

router.post('/courses',adminMiddleware, async (req, res) => {
    // console.log("authenticated: ", req.body);
    let length = (await Course.find()).length + 1
    const course = new Course({
        id: length,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
        published: req.body.published
    })

    course.save();
    res.json({
        "msg": "Course Created Succesfully"
    })

    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Get all courses
    let response = await Course.find()
    let finalData = []
    for(let row in response){
        let data = {
            id : response[row].id,
            title : response[row].title,
            description : response[row].description,
            price : response[row].price,
            imageLink : response[row].imageLink,
            published: response[row].published
        }
        finalData.push(data)
    }

    res.json(finalData)

    // Implement fetching all courses logic
});

module.exports = router;