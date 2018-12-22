import React from "react";

const Quote = props => {
  // console.log(props);
  return (
    <div>
      <div>Text body: {props.quote.textBody}</div>
      <div>Author: {props.quote.author}</div>
    </div>
  );
};

export default Quote;
