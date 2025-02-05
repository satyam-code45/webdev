const express = require("express")
const fs = require("fs");
const { parse } = require("path");

let data = fs.readFileSync("data.json", "utf-8");
let mytodo = JSON.parse(data);
let index = mytodo.length;

const app = express()
app.use(express.json());

app.get("/todos", async (req,res)=>{
  console.log(mytodo);
  res.status(200).json({
    mytodo
  })  
})

app.post("/create-todos", (req,res)=>{
  const todo = req.body.todo;
  
  let addTodo = {
      id: index + 1,
      todo: todo,
      done: false,
    };
    mytodo.push(addTodo);

    // Write back to the JSON file

    fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");

    //Use JSON.stringify(mytodo, null, 2) when writing to files (fs.writeFileSync) to keep JSON files structured and readable.
    //If we do not use null and 2 then also it will just work perfectly fine but when you will open data.json all the todos will be stacked together in the same line making it hard to read manually 
  res.status(200).json({
      "message":"Todo created successfully!"
  })   
})

app.delete("/delete-todos", (req,res)=>{
  console.log(mytodo);
  
  let id = req.body.id;
  id = parseInt(id)
  try {
    let filteredTodos = mytodo.filter((todo) => todo.id !== id)
    if (mytodo.length === filteredTodos.length) {
      return res.status(400).json({
        "message":"Todo not found!"
      })
    }
    console.log(filteredTodos);
    
    fs.writeFileSync("data.json", JSON.stringify(filteredTodos, null, 2), "utf8");
    res.status(400).json({
      "message":"Todo deleted successfully!"
    })
  } catch (error) {
    console.log(error);
  }
  
})

app.put("/update-todos", (req,res)=>{
  let id = req.body.id;
  id = parseInt(id) 
  let newTodo = req.body.todo
  try {
    let todoFound = false;

    // Update the matching todo
    mytodo = mytodo.map((todo) => {
      if (todo.id === id) {
        todoFound = true;
        return { ...todo, todo: newTodo }; // Update the task
        //This will only update the todo part to newTodo keeping the id and done as same as earlier
      }
      return todo;
    });
  
    if (!todoFound) {
      return res.status(404).json({
        "message":"Todo not found!"
      })
    }
  
    // Write the updated todos back to the file
    fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");
    res.status(400).json({
      "message":"Todo updated successfully!"
    })
  } catch (error) {
    console.log(error);
  }
})

app.put("/mark-todos", (req,res)=>{
  let id = req.body.id;
  id = parseInt(id) 
  try {
    let todoFound = false;

    // Update the matching todo
    mytodo = mytodo.map((todo) => {
      if (todo.id === id) {
        todoFound = true;
        return { ...todo, done: true }; // Update the task
        //This will only update the todo part to newTodo keeping the id and done as same as earlier
      }
      return todo;
    });
  
    if (!todoFound) {
      return res.status(404).json({
        "message":"Todo not found!"
      })
    }
  
    // Write the updated todos back to the file
    fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");
    res.status(400).json({
      "message":"Todo updated successfully!"
    })
  } catch (error) {
    console.log(error);
  }
})
app.listen(3000);
