import React, { useState } from "react";
import Navbar from "../../component/navbar";
import { confirmAlert } from "react-confirm-alert";
import "./style.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch } from "react-redux";
import { atcChangePassword } from "../../redux/actions/TaiKhoan";
import Swal from 'sweetalert2';

export default function DoiMatKhau(props) {
  document.title = "Đổi mật khẩu"

  const dispatch = useDispatch();
  const getRoleByPathName = () => {
    const { pathname } = props.history.location;
    let pathnameSplit = pathname.split("/")[1]
    if (pathnameSplit === "sinhvien") {
      return "SINH_VIEN"
    }
    if (pathnameSplit === "giangvien") {
      return "GIANG_VIEN";
    }
    if (pathnameSplit === "phuhuynh") {
      return "PHU_HUYNH";
    }

    return false;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPassword({ ...dataPassword, [name]: value });
  }
 
  const [dataPassword,setDataPassword] = useState({
    id:localStorage.getItem("id"),
    role:getRoleByPathName(),
    password:"",
    newPassword:"",
    confirmPassword:""
  })


  const handleDoiMatKhau = () => {
    if(!dataPassword.newPassword || !dataPassword.password || !dataPassword.confirmPassword ){
      Swal.fire({
        icon: 'error',
        title: 'Cảnh Báo !',
        text: 'Bạn cần điền đầy đủ thông tin trước khi cập nhật!',
        footer: '<a href="https://www.google.com/">Tại sao bạn đang gặp vấn đề này ?</a>'
      })
      return false;
    } else
    Swal.fire({
      title: 'Bạn có chắc chắn muốn thay đổi mật khẩu?',
      text: "Bạn không thể hoàn tác quá trình này!",
      type: "info",
      showCancelButton: true,
      confirmButtonColor: "#2ECC71",
      cancelButtonColor: "#ff7675",
      confirmButtonText:"Xác nhận!",
      cancelButtonText:"Hủy!"
    }).then((result) => {
      if(!result.value){
        return ;
      }
      dispatch(atcChangePassword(dataPassword))
      
    });
  }
  return (
    <div className="doi-mat-khau">
      <h2 style={{ textAlign: "center", textTransform: 'uppercase' }}>Đổi mật khẩu</h2>
      <div className="container">
        <div className="row">

          <div className="col-sm-8" style={{ marginLeft: '20%', marginTop: '5%' }}>

            <div className="form-group pass_show">
              <label>Mật khẩu hiện tại:</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="password"
                className="form-control"
                placeholder="Mật khẩu cũ"
                onChange={onChange}
              />
            </div>

            <div className="form-group pass_show">
              <label>Mật khẩu mới</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="newPassword"
                className="form-control"
                placeholder="Mât khẩu mới"
                onChange={onChange}
              />
            </div>

            <div className="form-group pass_show">
              <label>Xác nhận mật khẩu mới</label><span className="text-danger">*</span>
              <input
                type="password"
                defaultValue=""
                name="confirmPassword"
                className="form-control"
                placeholder="Xác nhận mật khẩu"
                onChange={onChange}
              />
            </div>
            <button style={{backgroundColor:"green", color:"white", width:"100%"}} className="btn btn" onClick={handleDoiMatKhau}>Xác nhận đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
