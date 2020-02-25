import React from "react";

function FormComponent() {
  return (
    <div>
      <h1>Submit Form</h1>
      <div className="formWraper">
        <form>
          <label>UserName</label>
          <input type="text"></input>
          <br></br>
          <label>Email</label>
          <input type="email"></input>
          <br></br>
          <label>Phone</label>

          <input type="text"></input>
          <br></br>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormComponent;
