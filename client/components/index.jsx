//extends component so you don't have tolater
import React, {Component} from 'react';
//helper method but component
import { Link } from 'react-router';

//clump npm modules, custom components, actions and stores flux all on separate lines
import { TodoItem, TodoList } from './todos/todos.jsx';

import TodoActions from '../actions/todos.actions.js';
import TodoStore from '../stores/todos.store.js';

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.setTodos = this.setTodos.bind(this);
  }

  componentWillMount() {
    //observable pattern: listen for changes via Alt
    TodoStore.listen(this.setTodos);
    TodoActions.loadActions();
  }

  render() {
    // object that would be called in item={}
    // let idItem = {
    //   title: 'test title',
    //   done: false
    // };

    return (
      <div style={{border: '1px solid black'}}>
        <Link to="add_todo">Add Item</Link>
      <button onClick={(e) => TodoActions.createTodo()}>New Todo</button>
        <TodoList>
          {/* js inside of jsx --> map instead of for each... .map iterates over array and returns new array*/}
          {this.state.todos.map((item, index) => {
            return <TodoItem key={`TodoItem-${index}`} item={item} />
          })}
          {/* double curly braces hey! we're using js. hey! here's a js object! most commonly found with inline styles */}
          {/* <TodoItem item={{title: 'test title', done: false}}/> */}
        </TodoList>
      </div>
    );
  }

  componentWillUnmount() {
    TodoStore.unlisten(this.setTodos);
  }

  //Custom Methods

  setTodos(TodoStore){
    this.setState({
      todos: TodoStore.todos
    })
  }
}

IndexComponent.propTypes = {};
