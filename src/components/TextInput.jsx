import React from 'react';

export class TextInput extends React.Component {
  constructor() {
    super();  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Extract form value
    const form = event.target;
    const value = form[0].value;

    // Call onSubmit callback
    this.props.onSubmit(value);

    // Reset form data
    form.reset();
  }

  render() {
    const inputStyling = {
      border: "0px",
      outline: "0px",
      fontSize: "30px",
      paddingTop: "10px",
      paddingBottom: "10px",
      width: "500px"
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          // style={inputStyling}
          className="font-sans text-2xl p-5"
          style={inputStyling}
          type="text"
          placeholder={this.props.placeholder}
        />
      </form>
    );
  }
}