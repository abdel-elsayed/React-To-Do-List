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
render(){   
  
  return (
    <div className="App">
        <Todos todos = {this.state.todos}/>
    </div>
  );
  }
}

export default App