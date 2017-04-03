import React from 'react';
//destructuring ES6 feature declare object variables instead of having to let Router = ReactRouter.Router; since already names of objects, case-sensitive, has to be the names from docs
import { Router, Route, IndexRoute, BrowserHistory} from 'react-router';

//import components
import Base from './components/base.jsx'
import IndexComponent from './components/index.jsx';
import AddTodo from './components/addTodo.jsx';

//export function to return our Routes

export default () => {
  return (
    <Router history={BrowserHistory}>
      <Route path="/" component={Base}>
        {/* this.props.children will render these routes and components */}
        <IndexRoute component={IndexComponent} />
      <Route path="add_todo" component={AddTodo}></Route>
      </Route>
    </Router>
  )
}
