import React from 'react'

function Todo(props) {
    const {todoId, removeTodo, text} = props;
    return (
        <div className="Todo">
            <button id={todoId} onClick={removeTodo}>X</button>
            <p>{text}</p>
        </div>
    )
}

export default Todo
