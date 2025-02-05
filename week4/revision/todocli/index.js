const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

let data = fs.readFileSync("data.json", "utf-8");
let mytodo = JSON.parse(data);
let id = mytodo.length;

program.name("todo").description("CLI to do file based tasks").version("0.8.0");

program
  .command("add-todo")
  .description("Add a new todo")
  .argument("<add>", "Todo description")
  .action((add) => {
    let addTodo = {
      id: id + 1,
      todo: add,
      done: false,
    };
    mytodo.push(addTodo);

    // Write back to the JSON file
    fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");
    //Use JSON.stringify(mytodo, null, 2) when writing to files (fs.writeFileSync) to keep JSON files structured and readable.
  });

  program
  .command("delete-todo")
  .description("Delete a todo by ID")
  .argument("<id>", "ID of the todo to delete")
  .action((id) => {
    id = parseInt(id); // Convert to a number

    // Filter out the todo with the matching ID
    const filteredTodos = mytodo.filter((todo) => todo.id !== id);

    if (filteredTodos.length === mytodo.length) {
      console.log(`Todo with ID ${id} not found.`);
      return;
    }

    // Update the JSON file
    fs.writeFileSync("data.json", JSON.stringify(filteredTodos, null, 2), "utf8");

    console.log(`Todo with ID ${id} deleted successfully.`);
  });


  // ** Command to Update a Todo **
program
.command("update-todo")
.description("Update a todo by ID")
.argument("<id>", "ID of the todo to update")
.argument("<newTodo>", "New todo description")
.action((id, newTodo) => {
  id = parseInt(id); // Convert to a number

  let todoFound = false;

  // Update the matching todo
  mytodo = mytodo.map((todo) => {
    if (todo.id === id) {
      todoFound = true;
      return { ...todo, todo: newTodo }; // Update the task
    }
    return todo;
  });

  if (!todoFound) {
    console.log(`Todo with ID ${id} not found.`);
    return;
  }

  // Write the updated todos back to the file
  fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");

  console.log(`Todo with ID ${id} updated to: "${newTodo}"`);
});

program
.command("mark-todo")
.description("Mark a todo by ID")
.argument("<id>", "ID of the todo to be marked true")
.action((id) => {
  id = parseInt(id); // Convert to a number

  let todoFound = false;

  // Update the matching todo
  mytodo = mytodo.map((todo) => {
    if (todo.id === id) {
      todoFound = true;
      return { ...todo, done: true }; // Update the task
    }
    return todo;
  });

  if (!todoFound) {
    console.log(`Todo with ID ${id} not found.`);
    return;
  }

  // Write the updated todos back to the file
  fs.writeFileSync("data.json", JSON.stringify(mytodo, null, 2), "utf8");

  console.log(`Todo with ID ${id} marked as done.`);
});

program.parse();
