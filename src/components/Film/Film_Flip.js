import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import "./Film_Flip.css";
export default function Film_Flip(props) {
  const { phim } = props;
  return (
    <div className="flip-card mt-10">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <img
              src={phim.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
        </div>
        <div
          className="flip-card-back"
          style={{
            position: "relative",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="text-2xl mt-3 font-bold">{phim.tenPhim}</div>
          <p>{phim.moTa}</p>
        </div>
      </div>
      {/* Cách chuyển hướng trang 1  */}
      <div className="text-center cursor-pointer py-2 bg-indigo-300 text-success-50 font-bold">
        <NavLink to={`/detailfilm/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
      </div>
      {/* Cách chuyển hướng trang 2  */}
      {/* <div
        className="text-center cursor-pointer py-2 bg-indigo-300 text-success-50 font-bold"
        onClick={() => {
          history.push(`/detailfilm/${phim.maPhim}`);
        }}
      >
        ĐẶT VÉ
      </div> */}
    </div>
  );
}
