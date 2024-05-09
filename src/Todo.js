import React from "react";

const Todo = ({key,id,task='default',remove}) => {

    const handleRemove = () => remove(id);
    
    return (
        <div>
            <li key={id}>{task}<button onClick={handleRemove}>X</button></li>
        </div>
    )
}

export default Todo;