import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeItem} from '../actions';
class TodoItem extends Component {
  constructor(props){
    super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(params) {
    this.props.removeItem(params);
  }
  render() {
    const {content, params} = this.props;
    console.log("content", params)
    return (
      <CustomDiv>
        <label>{content}</label>
        <IconButton onClick={() => this.handleClick(params)}>
          <DeleteIcon />
        </IconButton>
      </CustomDiv>
    );
  }
}

const CustomDiv = styled.div`
  margin: 10px ;
`
function mapStateToProps(state) {
  return {
      status: state.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
      removeItem: bindActionCreators(removeItem, dispatch)
  }
}

TodoItem.propTypes = {
  removeItem: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);