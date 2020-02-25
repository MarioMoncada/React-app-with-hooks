import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navigation">
      <Link to="/FocusableTextInput">
        <li>Input</li>
      </Link>
      <Link to="/Voting">
        <li>Voting App</li>
      </Link>
      <Link to="/FormComponent">
        <li>Register</li>
      </Link>
    </nav>
  );
}
