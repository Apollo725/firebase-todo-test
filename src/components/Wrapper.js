import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getItem} from '../actions';

class Wrapper extends Component {
  componentDidMount(){
    this.props.getItem();  
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const { status: nextStatus } = nextProps;

    if (nextStatus === 'add_success') {
      this.props.getItem();
    }
  }
  
  render() {
    const {todo_db} = this.props.items;
    console.log("items", todo_db);
    return (
      <div>
        <AddTodo />
          { todo_db &&
            Object.keys(todo_db).map((prop, index) => {
               console.log("index", index);
               return <TodoItem content={todo_db[prop].text} key={index} />
            })
          }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      items: state.items,
      status: state.status,
  }
}
function mapDispatchToProps(dispatch) {
  return {
      getItem: bindActionCreators(getItem, dispatch),
  }
}
Wrapper.propTypes = {
  getItem: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);