import { useState,useEffect } from 'react'
import axios from "axios";
import './App.css';


function App()
{
    const [todos,setTodos]=useState([]);
    const fetchtodos=async function(){
      const res=await axios.get("http://localhost:3000/todos");
      setTodos(res.data);
    }
    useEffect(() => {
      fetchtodos();
    },[]);
    return (
      <div>
        <Createtodo></Createtodo>
        <Todos todos={todos}></Todos>
      </div>
    )
}
function Createtodo()
{
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

    return (
      <div>
        <input type="text" placeholder="Enter title" style={{padding:10,margin:10}} onChange={function(e){
          setTitle(e.target.value);
        }}/> <br />
        <input type="text" placeholder="Enter description"  style={{padding:10,margin:10}} onChange={function(e){
          setDescription(e.target.value);}} /> <br />
        <button onClick={
          async function()
          {
            const a=await axios.post("http://localhost:3000/todo",{title:title,description:description});
            console.log(a);
            alert("Todo added");
          }
        }>Add todo</button>
      </div>
    )
}
function Todos(props)
{
    const todos=props.todos;
    return (
      <div>
        {
          todos.map(function(todo){
            return (
            <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed==true ? "Completed":"Mark as complete"}</button>
            </div>
            )
          })
        }
      </div>
    )
}
export default App;
