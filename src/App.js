import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Switch , Route , Redirect} from "react-router-dom";

const App = () => {
    return (
        <>
          <Navbar/>
          <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/contact' component={Contact}/>
           <Route exact path='/services' component={Services}/>
           <Redirect to="/" />
          </Switch>
          <Footer/>
        </>
    );
};

export default App
