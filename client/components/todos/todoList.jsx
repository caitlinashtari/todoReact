//extends component so you don't have tolater
import React, {Component} from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }

}
