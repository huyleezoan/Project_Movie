import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import "./HomeCarousel.css"
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel(props) {
  const { arrImg } = useSelector((rootReducer) => rootReducer.CarouselReducer);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // try {
    //   const result = await axios({
    //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    //     method: "GET",
    //     headers: {
    //       tokenCyberSoft:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc",
    //     },
    //   });
    //   dispatch({
    //     type: "SET_CAROUSEL_HOME",
    //     arrImg: result.data.content,
    //   });
    //   console.log(result);
    // } catch (errors) {
    //   console.log("errors: ", errors);
    // }

    // const action = getCarouselAction;
    // dispatch(action);

    dispatch(getCarouselAction);
  }, []);
  //! Nên chỉnh hình theo background thay cho img vì img chỉnh sễ bị bể ảnh
  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  console.log(arrImg);

  return (
    <div >
      <Carousel effect="fade" style={{ position: "relative" }}>
        {renderImg()}
      </Carousel>
    </div>
  );
}
