import React from "react";
import Quote from "./Quote";

// component to map over quotes and pass to quote
const QuotesList = props => {
  return (
    <div>
      <div>Your Quotes:</div>
      <div>
        {props.quotes.map((quote, index) => (
          <Quote key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuotesList;
