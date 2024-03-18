import React,{useState} from "react";
import "./App.css";
import {  BrowserRouter as Router} from 'react-router-dom';

import Routerconfig from "./Routes/Routesconfig"


function App() {
  return (
    <Router >
      <main className="h-100">
        <Routerconfig/>
      </main>
    </Router>
  );
}

export default App;
