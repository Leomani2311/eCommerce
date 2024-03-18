import React from "react";
// import Login_page from "./Login_page";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  Switch,
  NavLink,
} from "react-router-dom";
import { ROUTE } from "../Routes/Routes";
import Login_page from "./Login_page";
import Register from "./Register";

const Authlayout = (props)=> {
  console.log("Authlog");
  return (
    <div>
      {/* <Route exect path="/" Component={<Login_page/>}/>
      <Route exect path="/auth" Component={<Login_page/>}/> */}
      <Route path={ROUTE.LOGIN} element={<Login_page/>}/>
      <Route path={ROUTE.REGISTER} Component={<Register/>}/>
       
    </div>
  );
}

export default Authlayout;
