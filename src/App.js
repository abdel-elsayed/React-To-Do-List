import React from 'react'
import './App.css';
import Todos from './components/Todos.js'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios'

class App extends React.Component {
state = {
  todos: []
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=9').
  then(res => this.setState({ todos: res.data}))
}


// Toggle complete for items
markComplete = (id) =>{
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.isCompleted = !todo.isCompleted;
    }
    return todo;
  })})
}

// Delete To-do Item
deleteItem =(id) => {

  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res =>  this.setState({todos: this.state.todos.filter(todo => 
    todo.id !== id)}))

  
}

// Add todo
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title, 
    isCompleted: false
  })
  .then(res => this.setState({ todos: [...this.state.todos, res.data]})
  ); 
}

render(){   
  
  return (
    <div className="App">
        <Header /> 
         <AddTodo  addTodo={this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete = {this.markComplete}
        deleteItem={this.deleteItem}/>
       
    </div>
  );
  }
}

export default App