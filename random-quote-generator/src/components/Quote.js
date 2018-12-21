import React from "react";

const Quote = props => {
  console.log(props);
  return (
    <div>
      <div>{props.quote.textBody}</div>
      <div>{props.quote.author}</div>
    </div>
  );
};

export default Quote;
