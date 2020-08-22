import React from "react";

let Editor = (props) => {
  return (
    <div>
      <textarea
        id='editor'
        className='form-control z-depth-1'
        value={props.value}
        onChange={props.onChange}
        type='text'
      />
    </div>
  );
};

export default Editor;
