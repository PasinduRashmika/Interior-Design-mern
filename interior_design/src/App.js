import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './Hooks/ScrollToTop';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";

import AdminDash from './Components/AdminDash/adminDashboard'
import setAuthToken from "./utils/setAuthToken";
import AuthState from './context/auth/authState';
import AlertState from './context/alert/alertState';

function App() {
  return (
    
    <AuthState>
    {/* <AlertState> */}
    <Router>
      <div className="App">
      <ScrollToTop/>
        {/* <ScrollToTop/> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Home />
            </Route>
            <Route exact path="/pages">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/admin/dashboard">
            <AdminDash />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            {/* <Route exact path="/resorcepersons">
            <ResorcePersons />
          </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
    {/* </AlertState> */}
    </AuthState>
  );
}

export default App;
