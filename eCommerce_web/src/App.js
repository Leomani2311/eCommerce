import React,{useState} from "react";
import "./App.css";
import Home from "./page/Home";
import HowItWorks from "./page/HowItWorks";
import FQA from "./page/Fqa"
import All_prodcts from "./page/Allproducts";
import Product_detail from "./page/Product_Detail/index";
import {productData} from './shared/contants'
import { Routes, Route, Link, BrowserRouter, useHistory, Switch, NavLink } from 'react-router-dom';


function App() {

  const[date,setdate] =useState(new Date())
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-work" element={<HowItWorks />} />
          <Route path="/fqa" element={<FQA/>}/>
          <Route path="/allproduects" element={<All_prodcts/>}/>
          {productData.map((product, index) => (
            <Route key={index} path={`/product/${product.id}`} element={<Product_detail  productid={product}/>} />
           ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
