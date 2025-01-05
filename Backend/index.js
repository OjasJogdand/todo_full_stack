import express from "express";
import bodyParser from "body-parser";
import {a,update} from "./types.js";
import todo from "./db.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/todo",async function(req,res){
    
    const title=req.body.title;
    const description=req.body.description;
    const user=a.parse({title:title,description:description});
    if(user)
    {
        await todo.create({title:title,description:description,completed:false});
    }
    else
    {
        res.json({msg:"invalid format"});
    }
});
app.get("/todos",async function(req,res){
   const todos=await todo.find({});
   res.json(todos);
});
app.put("/completed",async function(req,res){
     const b=req.body.id;
     const user2=update.parse({id:b});
     if(user2)
     {
         await todo.update({_id:req.body.id},{
            completed:true
         });
     }
     else
     {
        res.json({msg:"invalid format"});
     }
});
app.listen(3000,function(){
    console.log("listening on port 3000");
});