import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    const {addTodo, removeTodo, keyLogger, inputVal} = props;

    return (
        <div className="TodoList" >
            <form className="Form-Normal" onSubmit={addTodo}>
                <input name="todo_input" type="text" onChange={keyLogger} placeholder="Add a todo" />
            </form>
            {
                props.todos.map((todo) => {
                const {text, id} = todo;
                return (<Todo text={text} todoId={id} key={id} removeTodo={removeTodo}/>)
                })
            }
        </div>
    )
}

export default TodoList
