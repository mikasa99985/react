import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './utility/css/app_theme.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Google from './pages/Google';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Page_404 from './pages/Page_404';
import MyCards from './pages/MyCards';
import Details from './pages/Details';
import EmailReport from './pages/EmailReport';
import Payment from './pages/Payment';
import Library from './pages/Library';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Favorites from './pages/Favorites';
import OurTeam from './pages/OurTeam';
import About from './pages/About';

function App() {
  const appStyle = {
      background: 'rgba(255, 187, 0, 0.999)', // Yellow with 50% transparency
      minHeight: '100vh', // Ensure the background color covers the whole viewport height
  };

  return (
    <div className='theme'>
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

          <Route exact path="/google_sign_in">
            <Google />
          </Route>

          <Route exact path="/shop/:name">
            <Details />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/profile/:id/:name">
            <Profile />
          </Route>

          <Route exact path="/my_cards">
            <MyCards />
          </Route>
          
          <Route exact path="/report">
            <EmailReport />
          </Route>

          <Route exact path="/payment">
            <Payment />
          </Route>
          
          <Route exact path="/library">
            <Library />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

          <Route exact path="/favorites">
            <Favorites />
          </Route>

          <Route exact path="/ourteam">
            <OurTeam />
          </Route>

          <Route exact path="/about">
            < About/>
          </Route>

          {/* 404 ERROR PAGE THIS REQUIRED THE END OF THE ALL ROUTERS */}
          <Route exact path="*">
            <Page_404 />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
