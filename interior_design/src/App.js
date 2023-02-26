import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import ScrollToTop from './Hooks/ScrollToTop';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Forgotpassword from './Pages/forgotPassword'

import AdminDash from './Components/AdminDash/adminDashboard'
import setAuthToken from "./utils/setAuthToken";
import AuthState from './context/auth/authState';
import AlertState from './context/alert/alertState';

function App() {
  return (
    
    <AuthState>
    {/* <AlertState> */}
    <BrowserRouter>
    
      <div className="App">
      <ScrollToTop/>
      
        <div className="content">
        <Routes >
            <Route  path="/" element={<Home />} exact />
              
            <Route  path="/home"  element={<Home />} exact/>
  
            <Route  path="/services"  element={<Home />} exact/>

            <Route  path="/pages"  element={<Home />} exact/>

            <Route  path="/portfolio"  element={<Home />} exact/>

            <Route  path="/login"  element={<Login />} exact/>

            <Route  path="/admin/dashboard"  element={<AdminDash />} exact/>

            <Route  path="/aboutus"  element={<AboutUs />} exact/>

            <Route  path="/forgotpassword"  element={<Forgotpassword />} exact/>
            {/* <Route exact path="/resorcepersons">
            <ResorcePersons />
          </Route> */}
          </Routes>
        </div>
        
      </div>
      
    </BrowserRouter>
    {/* </AlertState> */}
    </AuthState>
  );
}

export default App;
