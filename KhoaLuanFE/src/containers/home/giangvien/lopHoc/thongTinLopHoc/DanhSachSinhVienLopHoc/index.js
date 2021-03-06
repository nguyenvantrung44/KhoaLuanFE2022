import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../../../common/Pagination";
import CanhBaoSinhVien from "../../../../../../component/giangVien/CanhBaoSinhVien";
import SinhVienLopHocItem from "../../../../../../component/giangVien/sinhVienLopHocItem";
import { atcGetSinhViensLopHoc } from "../../../../../../redux/actions/GiangVien";
import "./style.css";

export default function DanhSachSinhVienLopHoc(props) {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const { data } = useSelector((state) => state.sinhViensLopHocReducer, shallowEqual);
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");
  // atcGetSinhViensLopHoc
  const dispatch = useDispatch();
  const getItem = (id) => {
    return data.filter((item) => {
      return item.id == id;
    })[0];
  };
  const getIdItem = (id) => {
    setDataItem(getItem(id));
  };
  const onChangeSelect = (e) => {
    const { value, name } = e.target;
    setSelect(value)
  };
  const handleSearch = (data) => {
    
    if (select == 1) {
      data = data.filter((item) => {
        return item.trangThai;
      });
    } 
    if(search == ""){
      return data;
    }
    return data.filter((item) => {
      return (
        item.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.maSinhVien.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
  }
  const returnItem = (item) => {
    return item;
  }
  const onSearch = (e) => {
    const { value, name } = e.target;
    setSearch(value);
  };

  const handelPageClick = (page) => {
    dispatch(atcGetSinhViensLopHoc(props.id, page.selected));
    setindex(data.paginationMeta.pageNumber);
  };

  return (
    <>
      <div className="danh-sach-sinh-vien">
        <h3 style={{ textAlign: "center", marginTop: '30px' }}>DANH S??CH SINH VI??N </h3>
        <div className="header-danh-sach-sinh-vien">
          <div className="search-danh-sach-sinh-vien">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <input
                  type="search"
                  onChange={onSearch}
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
          <div style={{ width: "100%" }}></div>
          <div className="selected-danh-sach-sinh-vien" style={{ width: "60%", marginTop: '15px' }}>
            <select style={{ height: "35px", borderRadius: '1.2rem' }}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={0}
              onChange={onChangeSelect}
            >
              <option value={0} >T???t c??? sinh vi??n</option>
              <option value={1}>Nh???ng sinh vi??n c?? t??nh tr???ng b??? c???nh b??o</option>
            </select>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr
              style={{
                backgroundColor: "green",
                color:'white',
                textAlign: "center",
              }}
            >
              <th scope="col">STT</th>
              <th scope="col">M?? sinh vi??n</th>
              <th scope="col">H??? v?? t??n</th>
              <th scope="col">Gi???i t??nh</th>
              <th scope="col">Email</th>
              <th scope="col">T??nh tr???ng</th>
              <th scope="col">??i???m trung b??nh t??ch l??y</th>
              <th scope="col">Thao t??c</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {data ? (
              handleSearch(data).map((item, index) => {
                return (
                  <SinhVienLopHocItem
                    key={item.id}
                    stt={index + 1}
                    item={item}
                    getIdItem={getIdItem}
                    returnItem={returnItem}
                  />
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        {useMemo(
          () => (
            <CanhBaoSinhVien getIdItem={getIdItem} dataItem={dataItem} />
          ),
          [returnItem]
        )}
      </div>


    </>
  );
}
