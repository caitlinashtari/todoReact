import Alt from '../alt.js';
import TodoActions from '../actions/todos.actions.js';

class TodoStore {
  constructor() {
    this.bindActions(TodoActions);

    this.state = {
      todos: []
    }
  }

  onLoadActions(todos) {
    this.setState({
      todos: todos
    });
  }

  onCreateTodo(todo) {
    //spread operator creates new copy of array because turns a pass ref to pass val so that when we modify it won't modify old array as well; maintain unidirectional flow
    let newState = {...this.state};

    newState.todos.push(todo);

    this.setState(newState);
  }

  onUpdateTodoTitle(nTodo){
    let nState = {...this.state};

    nState.todos.forEach((todo, i) => {
      if(todo._id === nTodo._id) nState.todos[i] = nTodo
    });

    this.setState(nState);
  }
  
  onUpdateTodoChecked(nTodo) {
    this.onUpdateTodoTitle(nTodo)
  }
}



export default Alt.createStore(TodoStore);
