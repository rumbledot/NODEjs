import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItems extends Component {
    getStyle() {
        return {        
            backgroundColor: '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #cccccc dotted',
            textDecoration : this.props.todo.completed ? 
            'line-through' : 'none'
        }    
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
            </div>
        );
    }
}

ToDoItems.propTypes={
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor : '#f4f4f4'
}

export default ToDoItems;