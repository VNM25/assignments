const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}))

app.post("/todos", async function (req, res) {
    let payload = req.body
    let valid = createTodo.safeParse(payload);
    if (valid.success){
        await todo.create({
            title: payload.title,
            description: payload.description,
            completed: false
        })
        res.status(201).json({status: "Success",
            message: "Todo created successfully"
        });
    }
    else{
        res.status(400).send(valid.error);
    }
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find();
    console.log(todos);
    
    res.status(200).json(todos)
})

app.put("/completed", async function (req, res) {
    let valid = updateTodo.safeParse(req.body);
    console.log("🚀 ~ valid:", valid)
    if(valid.success){
        await todo.updateOne({
            _id : req.body.id
        },{
            completed : true
        })
        res.status(200).json({
            status: "Success",
            msg: "Todo marked as Complete"
        })
    }
    else{
        res.status(404).json({
            status: "Not found",
            msg: "Todo does not exist",
            error: valid.error
        })
    }

})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})