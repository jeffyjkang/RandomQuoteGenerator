import React, { Component } from "react";

//random quote qomponent
class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: "",
      currentAuthor: ""
    };
  }
  //on mounting component invoke randomQuoteGenerator to return random quote
  componentDidMount() {
    this.randomQuoteGenerator();
  }
  randomQuoteGenerator = () => {
    console.log(this.props.quotes);
    let randomQuote = this.props.quotes[
      Math.floor(Math.random() * this.props.quotes.length)
    ];
    console.log("randomQuote", randomQuote);
    this.setState({
      currentQuote: randomQuote.textBody,
      currentAuthor: randomQuote.author
    });
  };
  render() {
    console.log("this.props in random quote component", this.props);
    return (
      <div>
        Random Quote:
        <div>Quote: {this.state.currentQuote}</div>
        <div>Author: {this.state.currentAuthor}</div>
        <button onClick={this.randomQuoteGenerator}>Next random Quote</button>
      </div>
    );
  }
}

export default RandomQuote;
