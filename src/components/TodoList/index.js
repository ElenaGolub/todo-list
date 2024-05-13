import React from "react";
import TodoListItem from "../TodoListItem";

const TodoList = ({todos}) =>{
    
    const elements = todos.map((items, index) => {
        return (
            <li key = {index}>
                <TodoListItem label = {items.label} important = {items.important}/>
            </li> 
        );
    });
    
    return(
        <ul>
            {elements}
        </ul>
    );
}

export default TodoList;