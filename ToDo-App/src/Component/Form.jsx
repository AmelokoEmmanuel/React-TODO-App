import {useState} from "react";
import TodoItem from "./TodoItem"
import styles from "./Form.module.css"
export default function Form({todos, setTodos}){

    const [todo, setTodo] = useState({name: "", done: false});
    
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done:false});
    };

    return(
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.container}>
            <input className={styles.mordern} onChange={(e)=> setTodo ({name:e.target.value, done:false})}
             value={todo.name}
              type="text" placeholder="Enter List Item..."/>
            <button className={styles.mybutton}type="submit">Add</button>
            </div>
           
            </form>
    )
}