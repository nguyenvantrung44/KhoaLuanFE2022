import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import SinhVienLopHocPhanItem from "../../../../../../component/giangVien/sinhVienLopHocPhanItem";
import { atcGetSinhViensLopHocPhan } from "../../../../../../redux/actions/GiangVien";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DiemDanh from "./diemDanh";
import NhapDiem from "./nhapDiem";
import "./style.css";
import CanhBaoSinhVien from "../../../../../../component/giangVien/CanhBaoSinhVien";
export default function DanhSachSinhVienLopHocPhan(props) {

  const [items, setItems] = useState();
  const [dataItem, setDataItem] = useState();
  const [idLhp, setIdLhp] = useState();

  const { data } = useSelector(
    (state) => state.sinhViensLopHocPhanReducer,
    shallowEqual
  );

  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getItem = (id) => {
    return data.filter((item) => {
      return item.id == id;
    })[0];
  };
  
  const onChangeSelect = (e) => {
    const { value, name } = e.target;
    setSelect(value);
  };
  const getIdItem = (id) => {
    setDataItem(getItem(id));
  };

  const getIdSvLhp = (id) => {
    setIdLhp(id);
  };

  const onSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };
  const handleSearch = (data) => {
    if (select == 1) {
      data = data.filter((item) => {
        return !item.trangThai;
      });
    }
    if (select == 2) {
      data = data.filter((item) => {
        return item.trangThai;
      });
    }
    if (search === "") {
      return data;
    }
    return data.filter((item) => {
      return (
        item.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.maSinhVien.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  };

  const returnItem = (item11) => {
    return item11;
  };

  return (
    <>
      <div className="danh-sach-sinh-vien">
        <h3 style={{ textAlign: "center", marginTop: "30px", marginBottom: '40px' }}>
          DANH S??CH SINH VI??N{" "}
        </h3>
        <div className="container-fluid header-danh-sach-sinh-vien">
          <div className="row" style={{ width: '100%' }}>
            <div className="search-danh-sach-sinh-vien col-md-6">
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <input
                    onChange={onSearch}
                    type="search"
                    placeholder="Nh???p t??? kh??a c???n t??m..."
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                  />
                  <div className="input-group-append">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 selected-danh-sach-sinh-vien"
              style={{ width: "40%", marginTop: "15px", display: 'flex', height: '50px' }}
            >
              <select
                style={{ height: "35px", borderRadius: "1.2rem", marginRight: '20px', marginLeft: "200px" }}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                defaultValue={0}
                onChange={onChangeSelect}
              >
                <option value={0}>T???t c??? sinh vi??n</option>
                <option value={1}>Nh???ng sinh vi??n b??? c???m thi</option>
                <option value={2}>Nh???ng sinh vi??n ???????c d??? thi</option>
              </select>

              <ReactHTMLTableToExcel
                style={{ marginTop: '-5px' }}
                id="download-table-xls-button"
                className="btn-outline"
                table="table-to-xls"
                filename={`LopHocPhan${props.id}`}
                sheet={`LopHocPhan${props.id}`}
                buttonText="T???i"

              />
            </div>
          </div>
        </div>

        <table
          id="table-to-xls"
          className="table table-bordered"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "green",
                color: "white",
                textAlign: "center",
              }}
            >
              <th scope="col">STT</th>
              <th scope="col">M?? sinh vi??n</th>
              <th scope="col">H??? v?? t??n</th>
              <th scope="col">TK1</th>
              <th scope="col">TK2</th>
              <th scope="col">TK3</th>
              <th scope="col">GK</th>
              <th scope="col">CK</th>
              <th scope="col">TBC</th>
              <th scope="col" style={{ width: "10%" }}>
                S??? ng??y ngh??? c?? ph??p
              </th>
              <th scope="col" style={{ width: "10%" }}>
                S??? ng??y ngh??? kh??ng ph??p
              </th>
              <th scope="col">T??nh tr???ng</th>
              <th scope="col">Thao t??c</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              handleSearch(data).map(
                (sinhvien, index) => {
                  return (
                    <SinhVienLopHocPhanItem
                      key={sinhvien.id}
                      item={sinhvien}
                      index={index}
                      getIdItem={getIdItem}
                      getIdSvLhp={getIdSvLhp}
                      returnItem={returnItem}
                    />
                  );
                }
              )
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        {useMemo(
          () => (
            <CanhBaoSinhVien
              idLopHocPhan={props.id}
              dataItem={dataItem}
              idSvLhp={idLhp}
            />
          ),
          [returnItem]
        )}

      </div>
      {useMemo(
        () => (
          <DiemDanh
            idLopHocPhan={props.id}
            dataItem={dataItem}
            idSvLhp={idLhp}
          />
        ),
        [dataItem]
      )}
    </>
  );
}
