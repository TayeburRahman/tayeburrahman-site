import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contact from './Componets/Contact/Contact';
import FooterBttom from "./Componets/Footer/Footer.Bttom";
import Navbar from "./Componets/Navbar/Navbar";
import Home from "./Page/Home";


function App() {
  return (
    <div className="App">
         <Router>
           <Navbar></Navbar>
            <Switch>
               <Route exact path="/">
                 <Home></Home>
               </Route>
               <Route exact path="/home">
                 <Home></Home>
               </Route>
               <Route exact path="/contact">
                  <Contact></Contact>
               </Route>
            </Switch>
           <FooterBttom></FooterBttom>
        </Router>
    </div>
  );
}

export default App;
