import {
  SET_DANH_SACH_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../types/QuanLyPhimType";
import { SET_THONG_TIN_LICH_CHIEU } from "../types/QuanLyRapType";

const stateDefault = {
  arrPhim: [
    {
      maPhim: 1289,
      tenPhim: "Fantastic Four",
      biDanh: "fantastic-four",
      trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
      moTa: "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
      maNhom: "GP00",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrPhimDefault: [],
  filmDetail: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrPhim = action.arrPhim;
      state.arrPhimDefault = action.arrPhim;
      return { ...state };
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrPhim = state.arrPhimDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      console.log(state.arrPhim);
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrPhim = state.arrPhimDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_THONG_TIN_LICH_CHIEU: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
