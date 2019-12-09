import React, { Component } from 'react';
import ToDos from './components/ToDos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      });
    }

  render() {
    return (
      <div className="App">
      <h1>Hello React</h1>
      <ToDos todos = {this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;