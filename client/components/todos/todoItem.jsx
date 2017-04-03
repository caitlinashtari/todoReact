//extends component so you don't have tolater
import React, {Component} from 'react';
import TodoActions from '../../actions/todos.actions.js';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.item.done || false,
      isEditMode: false
    };

    this.handleChecked = this.handleChecked.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <li>
        <input type="checkbox" onClick={this.handleChecked}/>
      {this.state.isEditMode ? this.renderInput() : this.renderTitle()}
      </li>
    );
  }

  handleChecked() {
    this.setState({
      //! inverts value
      checked: !this.state.checked
    })
  }

  handleToggle(e) {
    if(this.state.isEditMode) TodoActions.updateTodoTitle(this.props.item, e.target.value);
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  }

  renderInput() {
    return <input type="text" onBlur={this.handleToggle} defaultValue={this.props.item.title} autoFocus />
  }

  renderTitle () {
    return (
      <span style={{minWidth: '100px'}} onClick={this.handleToggle}>{this.props.item.title}</span>
    )
  }

}

//used for dev purposes only NOT TO BE USED IN PRODUCTION
TodoItem.propTypes = {
  item: React.PropTypes.object.isRequired
};
