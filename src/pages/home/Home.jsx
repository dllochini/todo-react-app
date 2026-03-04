import React, { useState } from 'react'
import Task from '../../components/Task'
import './Home.css'

function Home() {


    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");


    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    // let arr = [];
    // const name = "hello"
    // arr.push(name);
    // console.log(`sample array ${arr}`)

    const addTask = () => {

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, //if the length of the todo list is 0 make the id 1, else increment the id
            taskName: newTask,
            completed: false,
        }

        setTodoList([...todoList, task]);
    }

    /*
        simply how to delete
        ---- 1. 
        const arr = ["ann", "mary", "jane"];
        const newArray = arr.filter((name) => {
          if (name === "jane")
            return false;
          else 
            return true;
        })
  
        ---- 2.
        const tempList = todoList.filter((name) => {
          if (name === taskName)
            return false;
          else
            return true;
        })
  
        ---- 3.
        const tempList = todoList.filter((name) => { 
          return name !== taskName;
        })
  
        ---- 4.
        const tempList = todoList.filter((name) => name !== taskName)
  
    */

    //but from this if there are 2 tasks with the same name.. both get deleted.. so we have to put an identifier (id).

    const delTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    }

    const updateTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id)
                return { ...task, completed: true }
            else
                return task;
        }
        ))
    }

    return (
        <div className="App">
            <h1 className='title'>TODO APP</h1>
            <div className="addTask">
                <input value={newTask} onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => (
                    <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={delTask} updateTask={updateTask} />
                ))}
            </div>
        </div>
    )
}

export default Home