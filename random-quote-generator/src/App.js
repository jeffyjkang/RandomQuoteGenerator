import React, { Component } from "react";
import QuotesList from "./components/QuotesList";
import QuoteForm from "./components/QuoteForm";
import RandomQuote from "./components/RandomQuote";

import "./App.css";
//update
class App extends Component {
  //build constroctor for all of the quotes
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          textBody: "quote1",
          author: "author1"
        },
        {
          textBody: "quote2",
          author: "author2"
        }
      ]
    };
  }
  //submit quote event submission, currying
  handleSubmitQuote = quote => {
    // e.preventDefault();
    const newQuote = {
      textBody: quote.textBody,
      author: quote.author
    };
    console.log("i was clicked", newQuote);
    this.setState({ quotes: [...this.state.quotes, newQuote] });
    console.log("this.state", this.state);
  };
  render() {
    return (
      <div className="App-Container">
        <header className="Homepage-Header">Random Quote Generator App</header>
        <QuotesList quotes={this.state.quotes} />
        <QuoteForm handleSubmitQuote={this.handleSubmitQuote} />
        <RandomQuote quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
