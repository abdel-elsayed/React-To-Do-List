import React from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends React.Component {
    
    render(){
            return (
                <div style={{ border:'4px solid gray', marginLeft: 'auto', marginRight: 'auto', width: "50%"}}>
               { this.props.todos.map(
                (todo) => (
                    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                    deleteItem={this.props.deleteItem}/>
                )
            )}</div>
     )
    }
}

//PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired
}
export default Todos