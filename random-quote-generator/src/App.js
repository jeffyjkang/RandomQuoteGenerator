import React, { Component } from "react";
import ViewQuotes from "./components/ViewQuotes";
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
        <header className="Homepage-Header">Random Note Generator App</header>
        <ViewQuotes quotes={this.state.quotes} />
        <QuoteForm />
      </div>
    );
  }
}

export default App;
