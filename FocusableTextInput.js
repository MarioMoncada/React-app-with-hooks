import React, { useRef } from "react";
import TextInput from "./TextInput";

function FocusableTextInput() {
  const inputText = useRef(null);

  function handleChange(e) {
    if (e.target) {
      return inputText.current.focus();
    }
  }

  return (
    <div className="wrapFocusContent">
      <h1>FocusableTextInput</h1>
      <input type="text" onFocus={handleChange} ref={inputText}></input>
      <div>
        <TextInput ref={inputText}></TextInput>
      </div>
    </div>
  );
}

export default FocusableTextInput;
