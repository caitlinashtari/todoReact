//extends component so you don't have tolater
import React, {Component} from 'react';
//helper method but component
import { Link } from 'react-router';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <div>
        <Link to="/">Back to List</Link>
        
      </div>
    );
  }
}

AddTodo.propTypes = {};
