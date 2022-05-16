import React from "react";
import student from "./../../assets/img/student.png";
import teacher from "./../../assets/img/teacher.png";
import woman from "./../../assets/img/woman.png";
import "./style.css";
export default function TrangChu(props) {
  document.title = "Trang chủ";
  return (
    <div className="banner" style={{ paddingLeft: "5%", paddingRight: "5%" }}>

      <div className="gioi-thieu" style={{ backgroundColor: "rgba(238, 231, 231, 0.836)", borderRadius:"0.5rem", marginTop:"3%", marginBottom:"3%" }}>
        <div className="row">
          <div className="col-md-12 ml-5">
            <marquee behavior="scroll" direction="up"
              scrollamount="2"
              style={{
                fontSize: "50px",
                color: "bg-dark",
                fontWeight: "1000",
                margin: "20px",
                textAlign: "center"
              }}
            >
              {" "}
              HỆ THỐNG SỔ LIÊN LẠC ĐIỆN TỬ
            </marquee>
          </div>
        </div>
        <div className="row" style={{ padding: "5%", paddingTop: "0%" }}>
          <div className="col-12">
            <img style={{width:"100%", height:"100%"}}
              src="./img/home.jpg" 
              alt="https://tungtang.com.vn/blog/wp-content/uploads/2021/04/so-lien-lac-dien-tu-tung-tang1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
