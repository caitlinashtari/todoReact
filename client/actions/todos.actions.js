import Alt from '../alt.js';
import request from 'superagent';

//TODO remember pass by reference example

class TodoActions {
//make api request
  loadActions() {
    return (dispatch) => {
      request
        .get('/api/todos')
        .end((err, res) => {
          if(err) return console.log("LOAD ACTIONS API ERROR: ", err);
//dispatcher sends actions to store
          return dispatch(JSON.parse(res.text).todos);
        })
    }
  }

  createTodo() {
    return (dispatch) => {
      request
        .post('/api/todos')
        .end((err, res) => {
          if(err) return console.log("LOAD ACTIONS API ERROR");
          return dispatch(JSON.parse(res.text));
        })
    }
  }

  updateTodoTitle(todoItem, newTitle) {
    return (dispatch) => {
      let newTodo = todoItem;
      newTodo.title = newTitle;
      request
        .put(`/api/todos/${todoItem._id}`)
        .send(newTodo)
        .end((err, res) => {
          if(err) return console.log("UPDATE TITLE ERROR: ", err);

          return dispatch(JSON.parse(res.text));
        })
    }
  }
}

//second param is name of action
export default Alt.createActions(TodoActions);
