import React,{useState} from "react";
import Home from "../page/Home"; 
import HowItWorks from "../page/HowItWorks";
import FQA from "../page/Fqa"
import All_prodcts from "../page/Allproducts";
import Product_detail from "../page/Product_Detail/index";
import About_Product from "../page/Product_Detail/About_Product";
import Details from "../page/Product_Detail/Details";
import Spaces from "../page/Product_Detail/Spaces"
import {productData} from '../shared/contants'
import LoginPage from "../Auth/Login_page";
import { Routes, Route, Link, BrowserRouter, useHistory, Switch, NavLink} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Register from "../Auth/Register"
import { ROUTE } from "./Routes";
import Authlayout from "../Auth/Authlayout";


const  Routesconfig = () => {
  const route = useLocation();
  console.log('Current route:', route);

  return (
        <Routes>
          <Route  exect path="/" element={<Home />} />
          <Route  exect path="/secured" element={<Home />} />
          <Route path={ROUTE.DASHBOARD} element={<Home />} />
          <Route path="/how-it-work" element={<HowItWorks />} />
          <Route path="/fqa" element={<FQA/>}/>
          <Route path={ROUTE.ALLPRODUCT} element={<All_prodcts/>}/>
          <Route path={ROUTE.LOGIN} element={<LoginPage/>}/>
          <Route path={ROUTE.REGISTER} element={<Register/>}/>
          {/* <Route  Component={Authlayout}/> */}
          {/* <Route exect path="/" Component={<Authlayout/>}/> */}
          {productData.map((product, index) => (
            <Route key={index} path={`/product/${product.id}`} element={<Product_detail  productid={product}/>} />
            // <Route key={index} path={`/product/about-product${product.id}`} element={<About_Product  productid={product}/>} />
            // <Route key={index} path={`/product/details${product.id}`} element={<Details  productid={product}/>} />
            // <Route key={index} path={`/product/spaces${product.id}`} element={<Spaces  productid={product}/>} />
           ))}
        </Routes>
  );
}

export default Routesconfig;
