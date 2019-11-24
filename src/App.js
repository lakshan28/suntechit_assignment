import React from "react";
import Loging from "./components/screens/Loging";
import Register from "./components/screens/Register";
import Dashboard from "./components/screens/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Loging} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Dashboard} />
    </Router>
  );
}

export default App;
