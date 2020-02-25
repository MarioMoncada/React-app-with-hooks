import React from "react";

function TextInput({ type }, ref) {
  return (
    <div>
      <h1>TextInput</h1>

      <input type="text" value={type} ref={ref}></input>
    </div>
  );
}
const ForwaredRef = React.forwardRef(TextInput);
export default ForwaredRef;
