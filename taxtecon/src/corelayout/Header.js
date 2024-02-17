import React,{useState} from "react";
// import "./App.css";
// import Home from "../page/Home";
// import HowItWorks from "../page/HowItWorks";
// import FQA from "../page/Fqa"
import { Routes, Route, Link, BrowserRouter, useHistory, Switch, NavLink } from 'react-router-dom';


export default function Header() {

  const[date,setdate] =useState(new Date())
  return (
 
    
      <header >
        
        <p>{date.toDateString()}</p>
       
        <nav className="app_nav_bar">
          <div className="navlink_min_div">
          <NavLink className="navlink" to="/">Laptop</NavLink>
          <NavLink className="navlink" to="/how-it-work">Desktop PCs</NavLink>
          <NavLink className="navlink"  to="/fqa">Networking Devices</NavLink>
          <NavLink className="navlink"  to="/">Printers & Scanners</NavLink>
          <NavLink className="navlink"  to="/">PC Parts</NavLink>
          <NavLink className="navlink"  to="/">All Other Products</NavLink>
          <NavLink className="navlink"  to="/">Repairs</NavLink>
          </div>
        </nav>
      </header>
     

  );
}

