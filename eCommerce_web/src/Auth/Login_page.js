import React,{useState} from "react";
import Header from "../corelayout/Header";
import Footer from "../corelayout/Footer";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "../Routes/Routes";
import axios from "axios";


const Login_page = () => {
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
  const handleSubmit = async e => {
    console.log("data_saved", e);
    e.preventDefault();
    try {
      await axios.post("http://localhost:6002/api/users/login", {
        email,
        password,
      })
      console.log("user registered successfully",email,password);
      // Navigat('/auth/login')
    } catch (error) {
      console.log("error :", error);
    }
  };
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
              className="form-email"
              label="Email"
              name="email"
              style={{maxWidth:600}}
              rules={[{ required: true, message: "please enter the mailid" }]}
            >
              <Input fullwidth style={{ maxWidth: 800 }} type="email"  value={email}
                  onChange={e => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
              className="form-password"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "please enter the password",
                },
              ]}
            >
              <Input.Password type="password"   value={password}
                  onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 2,
                span: 2,
              }}
            >
              <Link  to='/'>
                <Button className="loginpage-btn" htmlType="submit">
                  Login
                </Button>
              </Link>
            </Form.Item>
          </Form>
          <Link to={ROUTE.REGISTER} className="new-div-btn">Create An Account</Link>
        </div>

        </div>

      </div>
      {/* <div className="h-100 container-fluid w-100">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
      
        <div className="new-div">
        <div className="c1"></div>
      <div className="c2"></div>
      <div className="c3"></div>
          <div class="new-circle1"></div>
          <div class="new-circle2"></div>
          <div className="new-glass-card h-100">
            <h3>Registered Customers</h3>
            
            <div className="new-div-li">
              <Form
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ marginTop: "6rem" ,fontFamily:"cursive"}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={{ onFinishFailed }}
                autoComplete="off"
              >
                <Form.Item
                  className="form-email"
                  label="Email"
                  name="email"
             
                  rules={[
                    { required: true, message: "please enter the mailid" },
                  ]}
                >
                  <Input fullwidth style={{maxWidth:800}} type="email"/>
                </Form.Item>
                <Form.Item
                  className="form-password"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "please enter the password",
                    },
                  ]}
                >
                  <Input.Password  type="password"/>
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 2,
                    span: 2,
                  }}
                >
                  <Link to="/">
                    <Button className="loginpage-btn" htmlType="submit">
                      Login
                    </Button>
                  </Link>
                
                </Form.Item>
              </Form>
            </div>
            <Link className="new-div-btn">Create An Account</Link>
          </div>
        </div>
      </div>
     
</div>       */}
    </>
  );
};
export default Login_page;
