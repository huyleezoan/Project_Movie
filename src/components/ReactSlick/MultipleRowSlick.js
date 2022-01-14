import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU } from "../../redux/types/QuanLyPhimType";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRowSlick.module.css";
import { SET_PHIM_SAP_CHIEU } from "./../../redux/types/QuanLyPhimType";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

export default function MultipleRowSlick(props) {
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const dispatch = useDispatch();
  const renderFilm = () => {
    return props.arrPhim.slice(0, 12).map((phim, index) => {
      return <Film_Flip phim={phim} />;
    });
  };
  const { dangChieu, sapChieu } = useSelector(
    (rootReducer) => rootReducer.QuanLyPhimReducer
  );

  let activeClassDangChieu =
    dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSapChieu =
    sapChieu === true ? "active_Film" : "none_active_Film";
  return (
    <div>
      <button
        type="button"
        class={`${styleSlick[activeClassDangChieu]} px-8 py-3 font-semibold border rounded border-coolGray-800`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        type="button"
        class={`${styleSlick[activeClassSapChieu]} px-8 py-3 font-semibold border rounded border-coolGray-800 text-coolGray-800 `}
        onClick={() => {
          const action = { type: SET_PHIM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
    
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
        <div>
          <h3>13</h3>
        </div>
        <div>
          <h3>14</h3>
        </div>
        <div>
          <h3>15</h3>
        </div>
        <div>
          <h3>16</h3>
        </div> */}
      </Slider>
    </div>
  );
}
