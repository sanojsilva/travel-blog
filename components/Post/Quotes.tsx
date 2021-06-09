import React from "react";

function Quotes(props) {
  return (
    <div>
      <div className="flex items-center w-2/3 text-2xl subtitle font-playfair-italic ">
        <img src="quotes.png" alt="" className="h-40" />
        <div className="-ml-20">{props.quote}</div>
      </div>
    </div>
  );
}

export default Quotes;
