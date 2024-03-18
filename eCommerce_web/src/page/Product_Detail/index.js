import React, { useMemo, useState } from "react";
import { Button, Checkbox, Divider, Tabs,Space } from 'antd';
import Header from "../../corelayout/Header";
import Footer from "../../corelayout/Footer";
import All_prodcts from "../Allproducts";
import { Link } from "react-router-dom";
// import About_Product from "./About_Product";
// import Details from "./Details";
// import Spaces from "./Spaces"

const CheckboxGroup = Checkbox.Group;


//*  -------- About - Details - Spaces-function -----//
const About_Product = (props) => {
  console.log("about----props", props.productid);
  return (
    <>
      <div>
        <div className="about_page">
          <h1 className="Product_name">{props.productid.product_name}</h1>
          <p className="product_description">{props.productid.description}</p>
        </div>
        <div className="about_page_image">
          <div className="icon-about">
            <img className="icon-about-1" src="http://localhost:3000/images/icon/like.png" />
            <img className="icon-about-2" src="http://localhost:3000/images/icon/benchmar.png" />
            <img className="icon-about-3" src="http://localhost:3000/images/icon/shared.png" />
          </div>
          <img className="about_page_in_image" src={props.productid.image} />
        </div>
        
      </div>
    </>
  );
};

const Details = (props) => {
  console.log("Details----props", props.productid);

  const detailsArray = props.productid.details.split("<br>");
  const detailsObject = {};

  detailsArray.forEach(detail => {
    const [key, ...value] = detail.split(":"); 
    detailsObject[key.trim()] = key;
  });
  console.log("finalValue", detailsObject);
  return (
    <>
      <div>
        <div className="details_page">
          <h1 className="Product_name_details">{props.productid.product_name}</h1>
         
          {Object.entries(detailsObject).map((data, i) => (
             <div className="product-details-p">
              <ul>
              <li key={i} >{data}</li>
              </ul>
            
            </div>
          ))}
          
        </div>
        <div className="details_page_image">
        <div className="icon-details">
            <img className="icon-about-1" src="http://localhost:3000/images/icon/like.png" />
            <img className="icon-about-2" src="http://localhost:3000/images/icon/benchmar.png" />
            <img className="icon-about-3" src="http://localhost:3000/images/icon/shared.png" />
          </div>
          <img className="details_page_in_image" src={props.productid.image} />
        </div>
      </div>
    </>
  );
};

const Spaces = (props) => {
  console.log("Space----props", props.productid);
  return (
    <>
      <div>
        <div className="about_page">
          <h1 className="Product_name">{props.productid.product_name}</h1>
          
        </div>
        <div className="about_page_image">
          <div className="icon-about">
            <img className="icon-about-1" src="http://localhost:3000/images/icon/like.png" />
            <img className="icon-about-2" src="http://localhost:3000/images/icon/benchmar.png" />
            <img className="icon-about-3" src="http://localhost:3000/images/icon/shared.png" />
          </div>
          <img className="about_page_in_image" src={props.productid.image} />
        </div>
      </div>
    </>
  );
};
//* -------------- About - Details - Spaces-function - END ---------------------------//

//* ----------------- Buttons  -back - addcart - paypal --------------------//
const operationsSlot ={
  left :<div>
          <Space>
            <Button style={{ marginLeft: "5rem" }}>
               <Link to="/allproduects" > back </Link> 
            </Button>
          </Space>
        </div>,
  right: <div>
            <Space>
             <Button><Link to="/allproduects" style={{ marginLeft: 16 }}> Add to cart </Link> </Button> 
             <Button><Link to="/allproduects" style={{ marginLeft: 16 }}> Paypal </Link> </Button>
            </Space>
          </div>,
}

const option = ['left','right'];
//* -------------- Buttons  -back - addcart - paypal - END ----------------------//



//*  -------------- main function ------------//
const Index = (props) => {
  console.log("props....c", props.productid);
//* ------ Button Set inside the tab ------- //
  const [position, setPosition] = useState(['left', 'right']);

  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: operationsSlot[direction],
      }),
      {},
    );
  }, [position]);
//* ------------- Button Set inside the tab - END -------------------- // 

//* ------------ About - Details - Spacs maping in Tab--------------- //
  const abs_btn = [
    {
      name: "About Product",
      page: <About_Product className="container" productid={props.productid} />,
    },
    { name: "Details", page: <Details productid={props.productid} /> },
    { name: "Specs", page: <Spaces productid={props.productid} /> },
  ];

  const items = abs_btn.map((_, i) => {
    console.log("abs_btn", _.name);
    return {
      label: `${_.name}`,
      key: i,
      children: <div>{_.page}</div>,
    };
  });
//*----------------- About - Details - Spacs maping in Tab - END-----------------//
  return (
    <>
      <Header />
      <div>

        <Tabs
          tabBarExtraContent ={slot}
          centered="true"
          style={{  marginTop:'70px'}} 
          items={items}
          tabBarStyle={{ textDecoration: 'none'}}
        />
      </div >
      <div className="extrainfo">
        <div className="left-sadow" />
        <div className="scroll-img" />
        <div className="right-sadow" />
      </div>
      <Footer />
    </>
  );
};
export default Index;
//* ---------- main function - END -------------------//




