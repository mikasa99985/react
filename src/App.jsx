import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const appStyle = {
    background: 'rgba(255, 187, 0, 0.999)', // Yellow with 50% transparency
    minHeight: '100vh', // Ensure the background color covers the whole viewport height
  };

  return (
    <div style={appStyle}>
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
    </div>
  );
}

export default App;
