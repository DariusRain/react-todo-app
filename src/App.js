
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import React, { Component } from 'react'
import TodoList from './components/misc/TodoList'
import Id from 'shortid'
export default class App extends Component {
  state = {
    appName: "My Todos",
    todos: [],
    keyLog: ""
  }

  addTodo = (e) => {
    e.preventDefault();
    console.log("Add Todo Fired")
    if(this.state.keyLog) {
    this.setState({
      todos: [...this.state.todos, {id: Id(), text: this.state.keyLog}],
    })
    e.target.reset()
  }
  }
  removeTodo = (e) => {
    console.log(e.target.id)
    this.setState({
      todos: this.state.todos.filter(todo => {return todo.id !== e.target.id})
    })
  }
  keyLogger = (e) => {
    if(e.target.value) {
      this.setState({
        keyLog: e.target.value
      })
    }
  }
  render() {
    const {appName, todos} = this.state;
    return (
      <div className="App">
      <Header appName={appName} />
      <Main>
        <TodoList addTodo={this.addTodo} keyLogger={this.keyLogger} removeTodo={this.removeTodo} todos={todos} inputVal={this.state.keyLog}/>
      </Main>
      <Footer appName={appName}/>
    </div>
    )
  }
}

