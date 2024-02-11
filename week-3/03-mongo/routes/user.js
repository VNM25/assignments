const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // console.log(req.body, req.body.username);
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    // console.log(user);

    let userExist = await User.findOne({
        username: user.username,
        password: user.password
    });

    if (userExist) {
        // console.log('User already exists');
        res.status(409).json({ message: "Username Already Exists" });
    }
    else {
        // console.log('User creation Started', user)
        user.save();
        res.status(201).json({ message: 'Sign Up Successful, User created' })
    }
});

router.get('/courses', async (req, res) => {
    let response = await Course.find()
    let finalData = []
    for (let row in response) {
        let data = {
            id: response[row].id,
            title: response[row].title,
            description: response[row].description,
            price: response[row].price,
            imageLink: response[row].imageLink,
            published: response[row].published
        }
        finalData.push(data)
    }

    res.json(finalData)

    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseID = req.params.courseId;
    // console.log(courseID);
    let courseExist = await Course.findOne({ id: courseID });
    let user = await User.findOne({ username: req.headers.username, password: req.headers.password })
    // console.log(courseExist, user);
    if (user.coursePurchased.includes(courseID)) {
        return res.status(409).send("You have already purchased this course");
    }
    else {
        if (courseExist) {
            if (courseExist.published) {
                user.coursePurchased.push(courseID);
                user.save()
                res.status(201).json({ message: "Purchase successful" })
            } else {
                res.status(404).send("Course is not available for purchase yet.")
            }
        }
        else {
            res.status(409).send({ message: "Invalid courseID" })
        }
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    User.findOne({ username: req.headers.username, password: req.headers.password }).then(
        async data => {
            console.log(data)
            let coursePurchased = []
            data.coursePurchased.sort()
            for (let i in data.coursePurchased) {
                // console.log(i);
                let res = await Course.findOne({ id: data.coursePurchased[i] })
                // console.log("res:", res);
                let course = {
                    id: res.id,
                    title: res.title,
                    description: res.description,
                    price: res.price,
                    imageLink: res.imageLink,
                    published: res.published
                }
                // console.log(course);
                coursePurchased.push(course)
            }
            // console.log(coursePurchased);
            res.status(200).json(coursePurchased)
        })
});

module.exports = router