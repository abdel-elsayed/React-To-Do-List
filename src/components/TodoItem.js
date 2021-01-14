import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '3px solid gray',
            borderRadius: '5%',
            textDecoration: this.props.todo.isCompleted 
            ? "line-through" : "none"
        }
    }
    render() {
        //const {id,title } = this.probs.todo;
        return (
            <div style= {this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
                    {this.props.todo.title} 
                     
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, this.props.todo.id)}>x</button>
                </p>
            
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem
