const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:helloworld@cluster0.skkkq8l.mongodb.net/courseApp');

// Define schemas 
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    coursePurchased: Array,
    // Schema definition here
});


const CourseSchema = new mongoose.Schema({
    id: Number, title: String, description: String, price: Number, imageLink: String, published: Boolean
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}