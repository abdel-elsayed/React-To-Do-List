import React from 'react'
import './App.css';
import Todos from './components/Todos.js'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'react-uuid'

class App extends React.Component {
state = {
  todos: [
    {
      id : uuid(),
      title : "Practice React",
      isCompleted : false 
    },
    {
      id : uuid(),
      title : "Eat Lunch",
      isCompleted : false 
    },
    {
      id : uuid(),
      title : "Walk a mile",
      isCompleted : false 
    }
  ]
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
  this.setState({todos: this.state.todos.filter(todo => 
    todo.id !== id)})
}

// Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuid(),
    title: title, 
    isCompleted: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]}); 
}

render(){   
  
  return (
    <div className="App">
        <Header />
        <Todos todos = {this.state.todos} markComplete = {this.markComplete}
        deleteItem={this.deleteItem}/>
        <AddTodo  addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App