import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/Pagination";
import LopHocItem from "../../../../component/giangVien/lopHocItem";
import { atcGetDanhSachLopHoc } from "../../../../redux/actions/GiangVien";
import "./style.css";
export default function LopHoc() {
  const { data } = useSelector((state) => state.lopHocReducer, shallowEqual);
  const dispatch = useDispatch();
  const [tbs, setTbs] = useState(data.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(0);
  const [dataItem, setDataItem] = useState();

  const datasPerpage = 5;
  const pagesVisited = pageNumber * datasPerpage;

  const handleClickPage = (data) => {
    setDataItem(data);
  }

  const displayLopHocs = tbs
    .slice(pagesVisited, pagesVisited + datasPerpage)
    .map((item, index) => {
      return (
        <LopHocItem handleClickThongBao={handleClickPage} item={item} key={item.id} stt={index} />
      )
    })

  const pageCount = Math.ceil(data.length / datasPerpage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="lop-hoc">
      <h4 style={{ textAlign: 'center', marginBottom: '4%' }}>DANH SÁCH LỚP HỌC</h4>
      <div className="lophoc-table">
        <table className="table table-bordered">
          <thead>
            <tr className="text-white" style={{ backgroundColor: 'green', textAlign: "center" }}>
              <th scope="col">STT</th>
              <th scope="col">Mã lớp</th>
              <th scope="col">Tên lớp</th>
              <th scope="col">Sỉ số</th>
            </tr>
          </thead>
          <tbody>
            {displayLopHocs}
          </tbody>
        </table>
      </div>
      <div className="pagination-lop">
      <Pagination data={{ pageCount: pageCount, handleChange: handleChange }} />
      </div>
    </div>
  );
}
