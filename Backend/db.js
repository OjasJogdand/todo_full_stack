import mongoose from "mongoose";

//Provide your own MongoDB connection string below.
mongoose.connect("mongodb+srv:///todo_fullstack");
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});
const todo=mongoose.model("Todos",todoschema);
export default todo;
