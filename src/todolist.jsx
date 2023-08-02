import './App.css';

import { useEffect, useState } from 'react';

function ToDoLists() {
    
     const [todo, setTodo] = useState([]);
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
    <div className='todolist'>
    <div id="myDIV" class="header">
  <h2>My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..."/>
  <span onclick="newElement()" class="addBtn">Add</span>
</div>

<div>
     {todo.map((tasks) => (
            <div className="tasks" key={tasks.id}>
              <ul>
                <li>{tasks.id}.</li>
                <li>{tasks.title}</li>
                <li>
                  <input type="checkbox" id="check" />
                      <button className=' text-danger '><i className="fa-solid fa-trash-can"></i></button> 

                 
                </li>
              </ul>
            </div>
          ))}
</div>

</div>

    </>
  );
}

export default ToDoLists;
