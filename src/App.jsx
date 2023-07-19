import React from 'react'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  return (
    <>
      <Router>
        <Switch>
       
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/sign_up">
            <SignUp />
          </Route>
          
          <Route exact path="/sign_in">
            <SignIn />
          </Route>

        </Switch>
      </Router>
    </>
  )
}

export default App
