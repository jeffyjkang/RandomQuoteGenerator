import React, { Component } from "react";
import QuotesList from "./components/QuotesList";
import QuoteForm from "./components/QuoteForm";

import "./App.css";
//update
class App extends Component {
  //build constroctor for all of the quotes
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: 0,
          textBody: "",
          author: ""
        }
      ],
      quote: ""
    };
  }
  render() {
    return (
      <div className="App-Container">
        <header className="Homepage-Header">Random Quote Generator App</header>
        <QuotesList quotes={this.state.quotes} />
        <QuoteForm />
      </div>
    );
  }
}

export default App;
