import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


const TodoList = () => {
   
    const [todoList, setTodoList] = useState([]);
    
    // create new todo
    const create = newTodo => {
        setTodoList(todoList => [...todoList, newTodo])
        
    }
    
    const remove = id => {
        setTodoList(todos => 
           todos.filter(todo => todo.id !== id));
        }
    
    return(
        <div>
            <NewTodoForm createTodo={create}/>
            <div>{todoList ? (
                 todoList.map( todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        remove={remove}
                    />
                ))
            ):(<div>No Todos</div>)
                   
    }
                </div>
            {/* <div>{allTodos}</div> */}
        </div>
        
    )
}

export default TodoList;