import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckAuthApi } from '../../api/TaiKhoanApi';
import { displayNotify } from '../../redux/actions/Notify';
import { atcDangNhap } from '../../redux/actions/TaiKhoan';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './style.css';
export default function Login(props) {
  document.title = "Đăng nhập"

  const [taiKhoan, setTaiKhoan] = useState({
    tenDangNhap:'',
    matKhau:''
  });

  const dispatch = useDispatch();
  const handleInputChange =(e)=>{
    const { name, value } = e.target;
    setTaiKhoan({ ...taiKhoan, [name]: value }); 
  }

  const onSubmit = (e)=>{
    e.preventDefault(); 
    if(taiKhoan.tenDangNhap===""||taiKhoan.matKhau===""){
      dispatch(
        displayNotify({ message: "Tên đăng nhập và mật khẫu không được rỗng!", type: "warning" })
      );
      return;
    }
    dispatch(atcDangNhap(taiKhoan,props.history));

    }
    
    useEffect(() => { 
      CheckAuthApi({
        token: localStorage.getItem("AccessToken"),
        id: localStorage.getItem("id"),
      })
        .then((res) => { 
          if (res.data.active === false) {
            props.history.replace("/login");
            localStorage.removeItem("id");
            localStorage.removeItem("AccessToken");
          }else{
            if(res.data.role==="SINH_VIEN"){
              props.history.replace("/sinhvien");
            }
            if(res.data.role==="GIANG_VIEN"){
              props.history.replace("/giangvien");
            }
            if(res.data.role==="PHU_HUYNH"){
              props.history.replace("/phuhuynh");
            }
          }
        })
        .catch((err) => { 
          localStorage.removeItem("id");
          localStorage.removeItem("AccessToken"); 
          return;
        });
    }, []);

  return (
    <>
       <Container className="mt-5 login-form">
                <Row className='wrapper fadeInDown'>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                    <h2 className="active" style={{color:"#FFF"}}> SỔ LIÊN LẠC ĐIỆN TỬ</h2>
                      <div className='fadeIn first'> 
                      <img className="icon-img" src="./img/educator.png" alt="icon"/>
                      </div>
                      
                        <Form onSubmit = {onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Tên đăng nhập" name="tenDangNhap" onChange ={handleInputChange}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Mật khẩu" name="matKhau" onChange ={handleInputChange}/>
                            </Form.Group>

                            <Button style={{backgroundColor:"green", color:"white", width:"100%"}} variant="btn-block" type="submit">Đăng nhập</Button>
                            <div className="text-left mt-3">
                            <a style={{color:"#FFF"}} className="underlineHover" href="#">Quên mật khẩu?</a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src="./img/login.png" alt=""/>
                    </Col>
                </Row>
            </Container>
    </>
  )
}
