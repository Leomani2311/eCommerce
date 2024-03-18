import React, { useState } from "react";
// import "./App.css";
// import Home from "../page/Home";
// import HowItWorks from "../page/HowItWorks";
// import FQA from "../page/Fqa"
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  Switch,
  NavLink,
} from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import { ROUTE } from "../Routes/Routes";
const items = [
  {
    key: "1",
    label: "MSI Workstation Series",
    children: [
      {
        key: "1-1",
        label: "MSI WS Series (12)",
      },
      {
        key: "1-2",
        label: "MSI WT Series (31)",
      },
      {
        key: "1-2",
        label: "MSI WE Series (7)",
      },
    ],
  },
  {
    key: "2",
    label: "MSI Workstation Series",
    children: [
      {
        key: "2-1",
        label: "MSI WT Series (31)",
      },
      {
        key: "2-2",
        label: "MSI WT Series (31)",
      },
    ],
  },
  {
    key: "3",
    label: "MSI Prestige Series",
  },
  {
    key: "4",
    label: "Gaming Notebooks",
  },
  {
    key: "5",
    label: "Tablets And Pads",
  },
  {
    key: "6",
    label: "Netbooks",
  },
  {
    key: "7",
    label: "Infinity Gaming Notebooks",
  },
];

export default function Header() {
  const [date, setdate] = useState(new Date());
  const [isLoggedIn,setLoggedIn] = useState(false);

  const handleLogin = () =>{
    setLoggedIn(true);
  }


  const handleprofile = () => {
    setLoggedIn(false);
  }

  
  return (
    <header>
      <div className="date_time_main">
        <div className="date_time_p"  >
          <p >{date.toDateString()}</p>
        </div>
        <div className="date_time_contact_us">
          <p>Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us</p>
        </div>
      </div>

      <nav className="app_nav_bar">
        <div className="navlink_min_div">

        <NavLink className="navlink" to={ROUTE.DASHBOARD}>
        <img src="http://localhost:3000/images/Logo.png"/>
          </NavLink>
         
          <Dropdown className="navlink" menu={{ items }}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                 Laptop
              </Space>
            </a>
          </Dropdown>
          {/* <NavLink className="navlink" to="">Laptop</NavLink> */}
          <NavLink className="navlink" to="/how-it-work">
            Desktop PCs
          </NavLink>
          <NavLink className="navlink" to="/fqa">
            Networking Devices
          </NavLink>
          <NavLink className="navlink" to={ROUTE.DASHBOARD}>
            Printers & Scanners
          </NavLink>
          <NavLink className="navlink" to={ROUTE.DASHBOARD}>
            PC Parts
          </NavLink>
          <NavLink className="navlink" to={ROUTE.DASHBOARD}>
            All Other Products
          </NavLink>
          <NavLink className="navlink" to={ROUTE.DASHBOARD}>
            Repairs
          </NavLink>
          <NavLink className="login-btn" to ={ROUTE.LOGIN}>
            <Button>LOGIN</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
