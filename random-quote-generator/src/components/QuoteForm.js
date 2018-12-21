import React, { Component } from "react";
// component for quote form
class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBody: "",
      author: ""
    };
  }
  //form edit handler
  editQuoteHandler = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form action="">
          <div>Input text body</div>
          <input
            type="text"
            name="textBody"
            onChange={this.editQuoteHandler}
            placeholder="textBody"
          />
          <div>Input author's name</div>
          <input
            type="text"
            name="author"
            onChange={this.editQuoteHandler}
            placeholder="author"
          />
        </form>
      </div>
    );
  }
}

export default QuoteForm;
