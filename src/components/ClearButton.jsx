import React from "react";

let ClearButton = (props) => {
  return (
    <button className='clear' onClick={props.Click}>
      {props.children}
    </button>
  );
};

export default ClearButton;
