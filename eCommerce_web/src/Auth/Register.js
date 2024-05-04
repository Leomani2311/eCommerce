import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import {  Dropdown, message, Space, Tooltip,Menu } from 'antd';
import { Link } from "react-router-dom";
import { ROUTE } from "../Routes/Routes";
import axios from "axios";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const Register = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype,setUsertype] = useState("");

  const Navigat = useNavigate()

  const handleSubmit = async e => {
    console.log("data_saved", e);
    e.preventDefault();
    try {
      await axios.post("http://localhost:6002/api/users/register", {
        name,
        email,
        password,
        usertype,
      })
      console.log("user registered successfully");
      Navigat('/auth/login')
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleMenuClick = (e) => {
    const selectedUsertype = e.key;
    setUsertype(selectedUsertype);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="admin">Admin</Menu.Item>
      <Menu.Item key="user">User</Menu.Item>
    </Menu>
  );

 


  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center h-100 vh-100 main-loginpage-div">
        <div className="new-div">
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3"></div>
          <div class="new-circle1"></div>
          <div class="new-circle2"></div>
          <div className=" vh-50  new-glass-card">
            <Form
              layout="vertical"
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ marginTop: "6rem", fontFamily: "cursive" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={{ onFinishFailed }}
              autoComplete="off"
            >
              <Form.Item
                className="form-firstname"
                label=" Name"
                name="Name"
                style={{ maxWidth: 600 }}
                rules={[{ required: true, message: "please enter the name" }]}
              >
                <Input
                  fullwidth
                  style={{ maxWidth: 800 }}
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                className="form-Email"
                label="Email"
                name="email"
                style={{ maxWidth: 600 }}
                rules={[{ required: true, message: "please enter the mailid" }]}
              >
                <Input
                  fullwidth
                  style={{ maxWidth: 800 }}
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                className="form-password"
                label="Password"
                name="password"
                style={{ maxWidth: 600 }}
                rules={[
                  { required: true, message: "please enter the password" },
                ]}
              >
                <Input
                  fullwidth
                  style={{ maxWidth: 800 }}
                  type="email"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                className="form-password"
                label="usertype"
                name="usertype"
                style={{ maxWidth: 600 }}
                value={usertype}
                onChange={e => setUsertype(e.target.value)}
              >
                <Dropdown.Button overlay={menu} onChange ={e => setUsertype(e.target.value)} icon={<UserOutlined />}>
                {usertype ? usertype : 'Select User Type'}
                </Dropdown.Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 2,
                  span: 2,
                }}
              >
                <Link>
                  <Button
                    className="Sub-btn"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
