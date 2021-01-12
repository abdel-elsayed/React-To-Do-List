import React from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends React.Component {
    render(){
        return this.props.todos.map(
            (todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            )
        )
    }
}

//PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired
}
export default Todos