import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title: ''
    }

    change = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form onSubmit={this.submit} style={{ marginLeft: 'auto', marginRight: 'auto',display: 'flex', width: '50%'}}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="Add todo.."
                    value={this.state.title}
                    onChange={this.change}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex:'1'}}
                />
                
            </form>
        )
    }
}

export default AddTodo
