import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Login from "./pages/Login"
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component = {Login} />
          <Route path = "/SignUp" component = {SignUp}/>
          <Route path = "/main" component = {Main} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;