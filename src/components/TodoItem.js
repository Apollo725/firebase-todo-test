import React, { Component } from 'react';

class TodoItem extends Component {
  
  render() {
    
    const {content} = this.props;
    console.log("content",content)
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default TodoItem;