import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ThongBaoSinhVienLopHocPhanItem from "../../../../../../../component/giangVien/thongBaoSinhVienLopHocPhanItem";
import { atcGetThongBaoSinhViensLopHocPhan } from "../../../../../../../redux/actions/GiangVien";
import "./style.css";
export default function DanhSachThongBaoLopHocPhan(props) {

  const { data } = props;

  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(2);
  const [index, setindex] = useState(0);
  const [dataItem, setDataItem] = useState();
  const [select, setSelect] = useState(0);

  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const { value, name } = e.target;  
    setSearch(value);
  };

  const handleSearch = (data) => {
    return data.filter((item) => {
      return item.tieuDe && item.noiDung
        ? item.tieuDe.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            item.noiDung.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : "";
    });
  };


  return (
    <div className="danh-sach-thong-bao">
      <div className="search">
        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              name="search"
              onChange={onSearch}
              placeholder="Nhập từ khóa cần tìm"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
            />
            <div className="input-group-append">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row">
            {/* <div className="col-md-8"> */}
            <div className="d-flex justify-content-center">
              <div
                className="list list-row card"
                id="sortable"
                data-sortable-id={0}
                aria-dropeffect="move"
              >
                {data ? handleSearch(data).map((item) => {
                  return (
                    <ThongBaoSinhVienLopHocPhanItem
                      id={props.id}
                      item={item}
                      key={item.idThongBao}
                      handleChinhSuaItem={props.handleChinhSuaItem}
                    />
                  );
                }) : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination"></div>
    </div>
  );
}
