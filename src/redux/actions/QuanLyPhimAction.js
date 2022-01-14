import { http, GROUPID } from "./../../util/setting";
import { SET_DANH_SACH_PHIM } from "./../types/QuanLyPhimType";
export const getDanhSachPhimAction = async (dispatch) => {
  const result = await http.get(
    `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`
  );
  console.log("ds phim: ", result);
  dispatch({
    type: SET_DANH_SACH_PHIM,
    arrPhim: result.data.content,
  });
};
