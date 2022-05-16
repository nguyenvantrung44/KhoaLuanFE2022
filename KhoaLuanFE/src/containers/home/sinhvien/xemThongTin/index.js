import { React, useEffect, useMemo, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import ChinhSuaThongTin from "../../../../component/sinhVien/thongTinSinhVien/chinhSua";
import ThongTinSinhVien from "../../../../component/sinhVien/thongTinSinhVien/thongTin";
import { atcImgUrl } from "../../../../redux/actions/TaiKhoan";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./style.css";
export default function XemThongTin() {
    document.title = "Thông tin sinh viên"
    const [imgURl, setImgURl] = useState(null);
    const [isSave, setIsSave] = useState(false);
    const { data } = useSelector((state) => state.sinhVienReducer, shallowEqual);
    const [img, setImg] = useState("");
    const [dataImgUrlApi, setDataImgUrlApi] = useState(null);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setImg(file);
        setDataImgUrlApi(e.target.files[0]);
        setIsSave(true);
    };
    const handleHuy = () => {
        setIsSave(false);
        setImg(data.imgUrl);
    };


    const handleLuu = () => {
        if ((dataImgUrlApi === null)) {
            return;
        }
        confirmAlert({
            title: "Lưu ý",
            message:
                "Bạn có muốn chỉnh sửa avatar! ",
            buttons: [
                {
                    label: "Có",
                    onClick: () => {
                        dispatch(atcImgUrl(dataImgUrlApi));
                    },
                    className: "btn btn-primary",
                },
                {
                    label: "Không",
                    onClick: () => {
                        return;
                    },
                    className: "btn btn-primary btn-sm",
                },
            ],
        });

    };
    useEffect(() => {
        setImg(data.imgUrl);
        console.log(data)
    }, []);
    return (
        <div className="profile">
            <div className="container emp-profile">

                <form method="post">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="card mb-4 mb-xl-0" style={{ height: "500px" }}>
                                <div className="card-header"><h3>Ảnh đại diện</h3></div>
                                <div className="card-body text-center">
                                    <div className="profile-img" style={{ minHeight: '200px' }}>
                                        {/* Profile picture image*/}
                                        <img src={img} className="img" alt="Cinque Terre" style={{ borderRadius: "70%" }} />

                                        {/* Profile picture upload button*/}
                                        <div className="file btn btn-lg text-white mt-5" style={{ backgroundColor: "green", display: !localStorage.getItem("idsv") ? '' : 'none' }}>
                                            Tải lên ảnh mới...
                                            <input type="file" name="file" onChange={onChange} />
                                        </div>
                                        <div className="btn_img">
                                            <button
                                                type="button"
                                                onClick={handleHuy}
                                                style={{ display: isSave ? "block" : "none" }}

                                                className="btn btn-warning"
                                            >
                                                Hủy
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleLuu}
                                                style={{ display: isSave ? "block" : "none", backgroundColor: "green" }}

                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="profile-head">
                                <h4>THÔNG TIN SINH VIÊN</h4>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="home-tab"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Thông tin cá nhân
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="profile-tab"
                                            data-toggle="tab"
                                            href="#profile"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                            style={{ display: localStorage.getItem("idsv") ? 'none' : 'block' }}
                                        >
                                            Chỉnh sửa thông tin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        {useMemo(
                                            () => (
                                                <ThongTinSinhVien />
                                            ),
                                            [data]
                                        )}
                                        {useMemo(
                                            () => (
                                                <ChinhSuaThongTin />
                                            ),
                                            [data]
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
