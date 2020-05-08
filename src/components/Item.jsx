import React from 'react';

export class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      isCompleted: false
    }

    this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
  }

  toggleIsCompleted() {
    const isCompleted = this.state.isCompleted;
    this.setState({
      isCompleted: !isCompleted,
    })
  }

  render() {
    const isCompleted = this.state.isCompleted;    

    const itemStyling = {
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: "30px",
      textDecoration: isCompleted ? "line-through" : "none",
      color: isCompleted ? "#b9b9b9" : "black",
    };
    console.log(this.state.isCompleted)
    return (
      <div
        style={itemStyling}
        onClick={this.toggleIsCompleted}
      >
        {this.props.todoTask}
      </div>
    );
  }
}