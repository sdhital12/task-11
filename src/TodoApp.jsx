import { useEffect, useState } from "react";

import React from "react";

function TodoApp() {
  //this useState is for displaying up todo list
  const [todo, setTodo] = useState([]);
  // const todoList = fetch("https://jsonplaceholder.typicode.com/todos");
  // console.log(todoList);

  //This usestate is for adding the task
  // const [addTask, setAddTask] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonObject = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=7"
        );
        console.log(jsonObject);
        const jsObject = await jsonObject.json();
        setTodo(jsObject);
        console.log(jsObject);
      } catch (error) {
        console.log("This is error", error);
      }
    };

    getData();
  }, []);

  return (
    <>
    <h3 className="text-center">To do Input</h3>
    <div className="p-5 mb-5" >
      <input placeholder="New To do task..."/>
      <button className=" btn btn-primary btn-lg">Add new Task</button>
    </div>
    <h2>To Do Lists</h2>
 <div className="d-flex mb-4">
        <button className=" btn btn-primary">All</button>
        
        <button className=" btn btn-success btn-lg mx-4">Done</button>
         <button className=" btn btn-warning">To Do</button>

        
      </div>
      
      <div>
        
    <div className="listInput">
      <i className="ri-checkbox-blank-circle-line"></i>
      <i className="fa-solid fa-pen"></i>
    </div>
        
      </div>


    
      <div className="main">
        <h1>To Do Lists </h1>
     

        <button className="button">ADD</button>
        <div className="todolist">
          {todo.map((tasks) => (
            <div className="tasks" key={tasks.id}>
              <ul>
                <li>{tasks.id}.</li>
                <li>{tasks.title}</li>
                <li>
                  <input type="checkbox" id="check" />
                  <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
                  <i class="material-icons">delete</i>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TodoApp;