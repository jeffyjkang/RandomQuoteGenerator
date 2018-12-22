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
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //clear state of the quote form
  handleQuoteForm = properties => e => {
    e.preventDefault();
    // console.log("fired", properties, "this.state", this.state);
    properties.handleSubmitQuote(this.state);
    this.setState({
      textBody: "",
      author: ""
    });
  };
  render() {
    // console.log("this.props", this.props, "this.state", this.state);
    return (
      <div>
        <form onSubmit={this.handleQuoteForm(this.props)}>
          <div>Input text body</div>
          <input
            type="text"
            name="textBody"
            onChange={this.editQuoteHandler}
            placeholder="textBody"
            value={this.state.textBody} // must put this in to clear filed after submission
          />
          <div>Input author's name</div>
          <input
            type="text"
            name="author"
            onChange={this.editQuoteHandler}
            placeholder="author"
            value={this.state.author} // must put this in to clear field after submission
          />
          <div>
            <button>Submit Quote</button>
          </div>
        </form>
        {/* <button
          onClick={() => {
            this.props.handleSubmitQuote(this.state);
          }}
        >
          Click me
        </button> */}
      </div>
    );
  }
}

export default QuoteForm;
