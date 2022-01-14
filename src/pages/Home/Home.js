import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/ReactSlick/MultipleRowSlick";
import { getDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { getDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home() {
  const { arrPhim } = useSelector(
    (rootReducer) => rootReducer.QuanLyPhimReducer
  );
  const { heThongRapChieu } = useSelector(
    (rootReducer) => rootReducer.QuanLyRapReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachPhimAction);
    dispatch(getDanhSachHeThongRapAction());
  }, []);
  console.log(arrPhim);
  console.log(heThongRapChieu);
  return (
    <div>
       <HomeCarousel />
      <section className="text-gray-600 body-font container">
        <div className="my-5">
          <MultipleRowSlick arrPhim={arrPhim} />

          {/* <MultipleRowSlick arrPhim={arrPhim} /> */}
          {/* <div className="flex flex-wrap -m-4">{renderFilm()}</div> */}
        </div>
      </section>
      <section className="container">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </section>
    </div>
  );
}
