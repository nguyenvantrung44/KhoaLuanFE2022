import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import ModelChiTietThongBaoSinhVien from "../../../../component/sinhVien/thongBaoSinhVien/modelChiTietThongBaoSinhVien";
import ThongBaoSinhVienItem from "../../../../component/sinhVien/thongBaoSinhVien/thongBaoItem";
import './style.css';

export default function ThongBao() {
  document.title = "Thông báo"
  const { data } = useSelector((state) => state.thongBaoReducer, shallowEqual);
  const [tbs, setTbs] = useState(data.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);
  const [dataItem, setDataItem] = useState();

  const datasPerpage = 5;
  const pagesVisited = pageNumber * datasPerpage;

  const handleClickThongBao = (data) => {
    setDataItem(data);
  }

  const displayTBs = tbs
    .slice(pagesVisited, pagesVisited + datasPerpage)
    .map(item => {
      return (
        <ThongBaoSinhVienItem handleClickThongBao={handleClickThongBao} item={item} key={item.id} />
      )
    })

  const pageCount = Math.ceil(data.length / datasPerpage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="thong-bao">
      <h4 style={{ textAlign: "center", marginBottom: '20px' }}>DANH SÁCH THÔNG BÁO </h4>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="row">
          <div className="col-md-10" >
            {displayTBs}

            <Pagination data={{pageCount: pageCount, handleChange: handleChange}} />

          </div>
        </div>
      </div>
      <ModelChiTietThongBaoSinhVien data={dataItem} />
    </div>

  );
}
