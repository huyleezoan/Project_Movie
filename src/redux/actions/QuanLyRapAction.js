import { GROUPID, http } from "../../util/setting";
import {
  SET_HE_THONG_RAP,
  SET_THONG_TIN_LICH_CHIEU,
} from "../types/QuanLyRapType";

export const getDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
    console.log("result he thong rap: ", result);
    dispatch({
      type: SET_HE_THONG_RAP,
      heThongRapChieu: result.data.content,
    });
  };
};

export const getThongTinLichChieu = (maPhim) => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
    console.log(result.data.content);
    dispatch({
      type: SET_THONG_TIN_LICH_CHIEU,
      filmDetail: result.data.content,
    });
  };
};
