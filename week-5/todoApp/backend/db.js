const mongodb = require('mongoose')


mongodb.connect('mongodb+srv://admin:HWmR8x38eoQpuKhB@appcluster.ro48f.mongodb.net/')

const todoSchema = mongodb.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongodb.model('todos', todoSchema)

module.exports = {
    todo
}
