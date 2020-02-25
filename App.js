import React from "react";
import NavBar from "./components/NavBar";
import FocusableTextInput from "./components/FocusableTextInput";
import Voting from "./components/Voting";
import FormComponent from "./components/FormComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route
            path="/FocusableTextInput"
            component={FocusableTextInput}
          ></Route>
          <Route path="/FormComponent" component={FormComponent}></Route>
          <Route path="/Voting" component={Voting}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
