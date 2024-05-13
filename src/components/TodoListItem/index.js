import React from "react";

const TodoListItem = ({label, important}) => {
    
    //console.log(important)
    //console.log(important ? 'tomato' : 'black')

    const style = {
        color: important ? 'tomato' : 'black' 
    };

    return (
        <span style = {style}>{label}</span>
    );
}

export default TodoListItem;