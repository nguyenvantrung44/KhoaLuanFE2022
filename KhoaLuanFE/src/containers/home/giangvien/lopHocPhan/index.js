import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../common/Pagination';
import LopHocPhanItem from '../../../../component/giangVien/LopHocPhanItem';
import { atcGetDanhSachLopHocPhan } from '../../../../redux/actions/GiangVien';
import './style.css';
export default function LopHocPhan() {

  const { data } = useSelector((state) => state.lopHocPhanReducer, shallowEqual);
  const dispatch = useDispatch();
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
    .map((item, index) => {
      return (
        <LopHocPhanItem handleClickThongBao={handleClickThongBao} item={item} key={item.id} stt={index} />
      )
    })

  const pageCount = Math.ceil(data.length / datasPerpage);

  const handleChange = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="lop-hoc-phan">
      <h4 style={{ textAlign: 'center', marginBottom: '30px' }}>DANH SÁCH LỚP HỌC PHẦN</h4>
      <div className='table-lop-hoc-phan'>
        <table className="table table-bordered">
          <thead>
            <tr className='text-white' style={{ backgroundColor: 'green', textAlign: "center" }}>
              <th scope="col" className='No'>STT</th>
              <th scope="col">Mã lớp học phần</th>
              <th scope="col">Tên lớp học phần</th>
              <th scope="col">Môn học</th>
              <th scope="col">Sỉ số</th>
            </tr>
          </thead>
          <tbody>
          {displayTBs}
          </tbody>
          <tfoot>

          </tfoot>

        </table>
      </div>
      <div className='pagination-foot-lophp'>
        
        <Pagination data={{ pageCount: pageCount, handleChange: handleChange }} />

      </div>
    </div>
  )
}
