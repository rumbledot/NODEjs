import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

class ToDos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <ToDoItems key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

ToDos.propTypes={
    todos: PropTypes.array.isRequired
}

export default ToDos;