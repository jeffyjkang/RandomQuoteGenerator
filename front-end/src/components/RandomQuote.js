import React, { Component } from "react";
import { QuoteContainer, QuoteButton, QuoteFont } from "../ReusableStyles";
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
    // console.log(this.props.quotes);
    let randomQuote = this.props.quotes[
      Math.floor(Math.random() * this.props.quotes.length)
    ];
    // console.log("randomQuote", randomQuote);
    this.setState({
      currentQuote: randomQuote.textBody,
      currentAuthor: randomQuote.author
    });
  };
  render() {
    // console.log("this.props in random quote component", this.props);
    return (
      <div>
        <QuoteContainer>
          Random Quote:
          <QuoteFont>Quote: {this.state.currentQuote}</QuoteFont>
          <QuoteFont>Author: {this.state.currentAuthor}</QuoteFont>
          <QuoteButton onClick={this.randomQuoteGenerator}>
            Next random Quote
          </QuoteButton>
        </QuoteContainer>
      </div>
    );
  }
}

export default RandomQuote;
