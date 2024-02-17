import React,{useState} from "react";
import { Card } from "antd";
import Header from "../corelayout/Header";
import Item from "antd/es/list/Item";
import { Link } from "react-router-dom";
import { new_product_arrays } from "../shared/contants";
const { Meta } = Card;

export default function Home() {
  console.log("dsfhsdhfh");
  const [rating,setRating] = useState(0);

  const handleStarclick = (index) =>{
    setRating(index +1);
  }

  return (
    <>
      <Header />
      <div className="main_div">
        <img className="msi_img" src="http://localhost:3000/images/msi.png" />
      </div>
      <h3 className="new_products">New Products</h3>
      <h6 className="new_products_link">
        <Link>see all new Products</Link>
      </h6>
      <div className="card_grid">
        {new_product_arrays.map(item => (
          <div key={item.title} className="card_1st">
            <Card hoverable style={{ width: 240 }}>
              <img src={item.image} alt={item.title} />
              <div className="stat-rating">
                {Array(5)
                .fill(0)
                .map((_,index) =>(
                  <span 
                      kay={index}
                      className={`star ${index < rating ? "active":""}`}
                      onClick={() => handleStarclick(index)}
                      >★</span>
                ))}
              </div>
              <Meta title={item.title} description={item.description} />
            </Card>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}
