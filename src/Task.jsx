import React from 'react'

const Task = (props) => {

    //child
    //form parent to chlid anything can be passed (functions, variables, ..)

    return (
        <div className="task">
            <h1 style={{
                textDecoration: props.completed ? "line-through" : "none"
            }}>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>  {/* if you are using a function with onClick parameters, you can;t use it directly. You have to call it within a function */}
            <button onClick={() => props.updateTask(props.id)}>Complete</button>
        </div>
    )
}

export default Task