import mongoose from "mongoose";


mongoose.connect("mongodb+srv://Ojas:pa6ZJOwIH6KXtnYR@cluster0.u83xy.mongodb.net/todo_fullstack");
const todoschema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});
const todo=mongoose.model("Todos",todoschema);
export default todo;