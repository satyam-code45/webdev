const  mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

//DB connection
try {
   mongoose.connect("mongodb+srv://satyamwrites23:satyamwrites23@cluster0.ducsp.mongodb.net/todos")
} catch (error) {
    console.log(error); 
}

const User = new Schema({
    email: {type:String, unique:true},
    password: String,
    name: String
})

const Todo = new Schema({
    title:String,
    done:{type:Boolean, default:false},
    userId: ObjectId
})

const UserModel = mongoose.model("users",User)
const TodoModel = mongoose.model("todos",Todo)

module.exports = {
    UserModel,
    TodoModel
}