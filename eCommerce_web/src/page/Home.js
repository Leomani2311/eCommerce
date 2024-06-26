import React, { useState,useEffect } from "react";
import { Card,Rate } from "antd";
import axios from "axios";
import Header from "../corelayout/Header";
import Item from "antd/es/list/Item";
import { Link } from "react-router-dom";
import All_prodcts from "./Allproducts";
import Footer from "../corelayout/Footer";
import { new_product_arrays,Custome_Builds,MSI_Laptops,Desktops,Gaming_Monitors,client_icon} from "../shared/contants";

import { ROUTE } from "../Routes/Routes";
const { Meta } = Card;


export default function Home() {
  console.log("dsfhsdhfh");
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/new_products/new_product');
        setProductData(response.data);
        console.log("manikandan....",productData)
        console.log("manikandan____",response.data[0].description)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="main_div">
        <img className="msi_img container" src="http://localhost:3000/images/msi.png" />
      </div>
      <h3 className="new_products">New Products</h3>
      <h6 className="new_products_link">
        <Link to={ROUTE.ALLPRODUCT} >see all new Products</Link>
      </h6>


      <div className="card_grid">
        {new_product_arrays.map(item => (
          <div key={item.sale_price} className="card_1st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.sale_price} />
             <Rate allowHalf defaultValue={2.5} />
                 <p>{item.description}</p>
              <h6>{item.sale_price}</h6>
            </Card>
          </div>
        ))}
      </div>



      <div className="card_grid">
      <img className="h-images" src="images/Custome_Builds.png"/>
        {Custome_Builds.map(item => (
          <div key={item.sale_price} className="card_2st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.sale_price} />
              <Rate allowHalf defaultValue={2.5} />
              {/* <Meta sale_price={item.sale_price} description={item.description} /> */}
              <p>{item.description}</p>
              <h6>{item.sale_price}</h6>


            </Card>
          </div>
        ))}
      </div>


      <div className="card_grid">
      <img className="h-images"  src="images/MSI_Laptops.png"/>
        {MSI_Laptops.map(item => (
          <div key={item.sale_price} className="card_2st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.sale_price} />
              <Rate allowHalf defaultValue={2.5} />
              <p>{item.description}</p>
              <h6>{item.sale_price}</h6>
            </Card>
          </div>
        ))}
      </div>
      <div className="card_grid">
      <img  className="h-images" src="images/Desktops.png"/>
        {Desktops.map(item => (
          <div key={item.sale_price} className="card_2st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.sale_price} />
              <Rate allowHalf defaultValue={2.5} />
              <p>{item.description}</p>
              <h6>{item.sale_price}</h6>
            </Card>
          </div>
        ))}
      </div>
      <div className="card_grid">
      <img className="h-images"  src="images/Gaming_Monitors.png"/>
        {Gaming_Monitors.map(item => (
          <div key={item.sale_price} className="card_2st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.sale_price} />
              <Rate allowHalf defaultValue={2.5} />
              <p>{item.description}</p>
              <h6>{item.sale_price}</h6>
            </Card>
          </div>
        ))}
      </div>

      <div className="card_grid">
        {client_icon.map(item =>(
          <div key={item.icon}>
             <img src={item.icon}/>
          </div>
        ))}
       
      </div>
      <Footer/>
    </>
  );
}
