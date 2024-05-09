import React, {useState} from "react";
import { v4 as uuid} from 'uuid';

const NewTodoForm = ({createTodo}) => {
    
    const [task, setTask] = useState("")

    const handleChange = (evt) => {
        
        setTask(evt.target.value) 
    }
    console.log(task)

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("SUBMITTED")
        createTodo({task, id: uuid()})
        setTask("")
    }

    return(
        <div>
            <h1>New Todo Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">TODO </label>
            <input id="todo" type="text" placeholder="todo" name="todo" value={task} onChange={handleChange}></input>
            <button>Submit</button>
        </form></div>
        
    )

}

export default NewTodoForm;