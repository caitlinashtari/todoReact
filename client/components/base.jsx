//extends component so you don't have tolater
import React, {Component} from 'react';

export default class Base extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Bryan is a cotton headed ninny muggins</h1>
        {this.props.children}
      </div>
    );
  }

}

Base.propTypes = {};
