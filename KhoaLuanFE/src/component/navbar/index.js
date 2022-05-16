import React, { useState } from "react";
import { CNavbar, CDropdownMenu, CDropdownToggle, CDropdown, CContainer, CNavbarBrand, CCollapse, CNavbarToggler, CNavbarNav, CNavLink } from "@coreui/react";

import { NavLink } from "react-router-dom";
import "./style.css";
import Swal from 'sweetalert2';

export default function Navbar(props) {

  const [visible, setVisible] = useState(false);
  const { pathname } = props.history.location;

  const handleLogout = () => {

  let timerInterval;
    Swal.fire({
      position: "top-end",
      title: "Đăng xuất sau 2 giây!",
      html: "Thời gian: <strong></strong>",
      showConfirmButton: false,
      timer: 2000,
      didOpen: () => {
        const content = Swal.getHtmlContainer();
        const $ = content.querySelector.bind(content)
        timerInterval = setInterval(() => {
          Swal.getHtmlContainer().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      localStorage.clear();
      props.history.replace("/login");
    });
  };

  const handleChangePassword = () => {
  };

  const getIndex = () => {
    return `/${pathname.split("/")[1]}`;
  };
  return (
    <>
      <CNavbar expand="lg" className="bg-light text-light">
        <CContainer fluid>
          <CNavbarBrand to={getIndex}>
            <NavLink className="navbar-brand navbar-logo" to={getIndex}>
              <i className="fas fa-book-open"></i> Sổ Liên Lạc Điện Tử
            </NavLink>
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              {props.routers.map((router, index) => {
                return (
                  <li className="nav-item ml-5" key={index}>
                    <NavLink
                      exact={router.exact}
                      activeStyle={{
                        marginTop: " 1px 0px 0px 0px",
                        hover: {
                          cursor: "pointer"
                        },
                        borderBottom: "none",
                        fontSize: "16px",
                        color: "white",
                        borderRadius: "10px",
                        backgroundColor: "green"

                      }}
                      className="nav-link active"
                      to={router.layout + router.path}

                    >

                      {router.icon}
                      {router.name}
                    </NavLink>
                  </li>
                );
              })}
              { }
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle>
                  <i className="fas fa-align-justify"></i>Khác
                </CDropdownToggle>
                <CDropdownMenu>
                  <NavLink
                    className="dropdown-item"
                    activeClassName="dropdown-item"
                    to={`${pathname}/doimatkhau`}
                  >
                    Đổi mật khẩu
                  </NavLink>
                  <li className="dropdown-item" onClick={handleLogout}>
                    Đăng xuất <i className="fas fa-sign-out-alt"></i>
                  </li>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
