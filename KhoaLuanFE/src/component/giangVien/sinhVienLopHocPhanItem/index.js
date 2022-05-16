import React from "react";
import { useDispatch } from "react-redux";
import {
  atcGetCanhBaoSinhViensLopHoc,
  atcGetNgayNghiSinhVien,
} from "../../../redux/actions/GiangVien";

export default function SinhVienLopHocPhanItem(props) {
  const {
    diemSinhVienMonHocDtoFix,
    hoTen,
    maSinhVien,
    id,
    soNgayNghiKhongPhep,
    soNgayNghiPhep,
    trangThai,
    idSvLhp,
  } = props.item;
  
  const dispatch = useDispatch();
  const handleDiemDanh = () => {
    props.getIdItem(id);
    props.getIdSvLhp(idSvLhp);

    dispatch(atcGetNgayNghiSinhVien(idSvLhp));
  };
  const setColorWarning = () => {
    return true?trangThai:false
  };
  const openModalCanhBao = () => {
    dispatch(atcGetCanhBaoSinhViensLopHoc(props.item.id));
    props.getIdItem(id);
    props.returnItem(props.item);
  };
  return (
    <>
      <tr
        style={{
          badiemCKgroundColor: !setColorWarning() ? "#ff99c2" : "",
        }}
      >
        <td>{props.index + 1}</td>
        <td>{maSinhVien}</td>
        <td>{hoTen}</td>
        <td>
          {diemSinhVienMonHocDtoFix.diemTK1 > 0 ? diemSinhVienMonHocDtoFix.diemTK1 : "-"}
        </td>
        <td>
          {diemSinhVienMonHocDtoFix.diemTK2 > 0 ? diemSinhVienMonHocDtoFix.diemTK2 : "-"}
        </td>
        <td>
          {diemSinhVienMonHocDtoFix.diemTK3 > 0 ? diemSinhVienMonHocDtoFix.diemTK3 : "-"}
        </td>
        <td>{diemSinhVienMonHocDtoFix.diemGK > 0 ? diemSinhVienMonHocDtoFix.diemGK : "-"}</td>
        <td>{diemSinhVienMonHocDtoFix.diemCK > 0 ? diemSinhVienMonHocDtoFix.diemCK : "-"}</td>
        <td>
          {Math.round(diemSinhVienMonHocDtoFix.diemTBC * 100) / 100 > 0
            ? Math.round(diemSinhVienMonHocDtoFix.diemTBC * 100) / 100
            : "-"}
        </td>
        <td style={{ textAlign: "center" }}>{soNgayNghiPhep}</td>
        <td style={{ textAlign: "center" }}>{soNgayNghiKhongPhep}</td>
        <td>{trangThai ? "Đang học" : "Cấm thi"}</td>
        <td style={{ textAlign: "left" }}>
          <button
            className="btn btn-link"
            onClick={openModalCanhBao}
            data-toggle="modal"
            data-target="#modelId"
            style={{ color: "red", height: "20px" }}
          >
            Cảnh báo
          </button>
          <br></br>
          <br />
          <button
            className="btn btn-link"
            data-toggle="modal"
            data-target="#modalSoNgayNghiPhep"
            onClick={handleDiemDanh}
            style={{display:diemSinhVienMonHocDtoFix.diemCK > 0 ?'none':'block'}}
          >
            Điểm danh
          </button>
        </td>
      </tr>
    </>
  );
}
