import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addItem, getItem} from '../actions';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state ={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleClick() {
    console.log('clicked!');
    this.props.addItem(this.state.value);
  }
  render() {
    const {status} = this.props;
    console.log("add status", status);
    return (
      <div>
         <input type="text" placeholder="Enter an activity..."  onChange={this.handleChange} />
         <button onClick={this.handleClick} >Add Todo</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      status: state.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
      addItem: bindActionCreators(addItem, dispatch),
      getItem: bindActionCreators(getItem, dispatch),
  }
}

AddTodo.propTypes = {
  addItem: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);