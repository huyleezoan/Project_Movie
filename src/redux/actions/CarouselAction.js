import axios from "axios";
import { DOMAIN, http } from "../../util/setting";
import { SET_CAROUSEL_HOME } from "../types/CarouselType";
export const getCarouselAction = async (dispatch) => {
  //   try {
  // const result = await axios({
  //   url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
  //   method: "GET",
  //   headers: {
  //     tokenCyberSoft:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NjU0NzIwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjU2Njk0ODAwfQ.6o2C_IS8e7HlB9dUZ9eFRYOb2ST9LjIIbn4fO_SS1Qc",
  //   },
  // });
  const result = await http.get("/api/QuanLyPhim/LayDanhSachBanner");
  console.log("result: ", result);
  dispatch({
    type: SET_CAROUSEL_HOME,
    arrImg: result.data.content,
  });
  //   } catch (errors) {
  //     console.log("errors: ", errors);
  //   }
};
