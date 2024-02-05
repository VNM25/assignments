const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Helloworld%402@cluster0.skkkq8l.mongodb.net/courseApp');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    name: String, password: String
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