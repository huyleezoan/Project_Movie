import React, { Fragment, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;
  const { heThongRapChieu } = props;
  console.log("hethongrapchieu: ", heThongRapChieu);

  const renderHeThongRap = () => {
    return heThongRapChieu.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src={heThongRap.logo}
                        alt=""
                        className="rounded-full"
                        width="50"
                      />
                      <div className="text-left ml-3">
                        {cumRap.tenCumRap}
                        <p>Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim?.map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              src={phim.hinhAnh}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
                              alt={phim.tenPhim}
                              onError={(e) => (
                                (e.target.onerror = null),
                                (e.target.src = "https://picsum.photos/100/200")
                              )}
                            />
                            <div className="ml-5">
                              <h1 className="text-2xl text-orange-500">
                                {phim.tenPhim}
                              </h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="grid grid-cols-8 gap-3">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to="/"
                                        className="text-green-500 font-bold"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <Fragment>
      <Tabs tabPosition={tabPosition} className="">
        {renderHeThongRap()}
      </Tabs>
    </Fragment>
  );
}
