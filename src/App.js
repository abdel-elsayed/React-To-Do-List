import React from 'react'
import './App.css';
import Todos from './components/Todos.js'

class App extends React.Component {
state = {
  todos: [
    {
      id : 1,
      title : "Practice React",
      isCompleted : false 
    },
    {
      id : 2,
      title : "Eat Lunch",
      isCompleted : false 
    },
    {
      id : 3,
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

render(){   
  
  return (
    <div className="App">
        <Todos todos = {this.state.todos} markComplete = {this.markComplete}
        deleteItem={this.deleteItem}/>
    </div>
  );
  }
}

export default App