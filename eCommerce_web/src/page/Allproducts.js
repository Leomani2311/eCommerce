import Header from "../corelayout/Header";
import Footer from "../corelayout/Footer";
// import { Divider, List, Typography } from 'antd';
import { Card, Image, Row, Col, Typography, Button, Tag } from 'antd';
import {productData} from '../shared/contants'
import { Link } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Tree} from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const {Content, Sider } = Layout;


const filter =[
  {
    title:"Category",
    key: "Category",
    children:[
      {
        title: <Link to="/">CUSTOM PCS</Link>  ,
        key: "Category-0-0",
        isleaf:true,
      },
      {
        title:"MSI ALL-IN-ONE PCS",
        key: "Category-0-1",
        isleaf:true,
      },
      {
        title:"HP/COMPAQ PCS",
        key: "Category-0-2",
        isleaf:true,
      },

    ]
  },
  {
    title:"Price",
    key: "Price-0",
    children:[
      {
        title:"$0.00 - $1,000.00",     
        key: "Price-0-0",
        isleaf:true,
      },
      {
        title:"$1,000.00 - $2,000.00",
        key: "Price-0-1",
        isleaf:true,
      },
      {
        title:" $2,000.00 - $3,000.00",
        key: "Price-0-2",
        isleaf:true,
      },
      {
        title:"  $3,000.00 - $4,000.00",
        key: "Price-0-3",
        isleaf:true,
      },
      {
        title:"$4,000.00 - $5,000.00",
        key: "Price-0-4",
        isleaf:true,
      },
      {
        title:"$5,000.00 - $6,000.00",
        key: "Price-0-5",
        isleaf:true,
      },
      {
        title:" $6,000.00 - $7,000.00",
        key: "Price-0-6",
        isleaf:true,
      },
      {
        title:"$7,000.00 And Above",
        key: "Price-0-7",
        isleaf:true,
      },
    ],
  },
];



export default function All_prodcts() {
  const onSelect = (key,info) =>{
    console.log('Triggerselect',key,info)
  }
  const onExpend = (key,info) =>{
    console.log('Triggerselect',key,info)
  }

  return (
    <>
      <Header />
      <div className="main_div container">
        <img
          className="title_img"
          src="http://localhost:3000/images/title_image.png"
        />
      </div>
      
      <div className="container"> 
        <div> Back </div>
      <Sider>
           <Tree className="tree-sider "  multiple defaultExpandAll onSelect={onSelect} onExpand={onExpend} treeData={filter}/>
      </Sider>
      <Content>
      <div  className="card-all-product  container">
    <Row gutter={16}>
      {productData.map((product, index) => (
        <Col  key={index} xs={24} sm={12} md={8} lg={6} xl={4} >
           <Link to={`/product/${product.id}`}  style={{ textDecoration: 'none' }} props={product.id}>
          <Card cover={<Image src={product.image} alt={product.title} />} >
            <Typography.Title level={4}>{product.sample_description}</Typography.Title>
            <Typography.Paragraph ellipsis={{ rows: 2 }}>{product.description}</Typography.Paragraph>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography.Text strong>{product.sale_price}</Typography.Text>
              
            </div>
            <Button type="primary">Add to Cart</Button>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </div>
  </Content>
      </div>
      <div>
 
      </div>
      <Footer/>
    </>
  );
}