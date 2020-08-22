import React from "react";

let Preview = (props) => {
  return (
    <div>
      <p id= "previewer">Previewer:</p>
      <div id='preview' dangerouslySetInnerHTML={props.HTML} />
    </div>
  );
};

export default Preview;
