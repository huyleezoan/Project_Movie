import React, { memo, useEffect } from "react";
import { Button } from "@tsamantanis/react-glassmorphism";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "../../assets/styles/circle.css";

import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getThongTinLichChieu } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";

const { TabPane } = Tabs;
export default function DetailFilm(props) {
  const { filmDetail } = useSelector(
    (rootReducer) => rootReducer.QuanLyPhimReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    console.log(id);
    dispatch(getThongTinLichChieu(id));
  }, []);
  console.log(filmDetail);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "100%",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "100vh" }}
        effectColor="rgba(255,255,255,0.4)"
        color="#14AEFF"
        blur={10} //
        borderRadius={0}
      >
        <div className="grid grid-cols-10">
          <div className="col-span-5 col-start-2">
            <div className="grid grid-cols-3 gap-5">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "250px", height: "350px" }}
                alt=""
              />
              <div className="col-span-2 pl-5" style={{ marginTop: "25%" }}>
                <p className="text-sm">
                  Ngày chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                </p>
                <p className="text-2xl text-yellow-500 font-bold">
                  {filmDetail.tenPhim}
                </p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-3 col-start-8">
            <div className={`c100 p${filmDetail.danhGia * 10} big green`}>
              <span>{filmDetail.danhGia * 10}</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <Tabs tabPosition={"left"}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </CustomCard>
    </div>
  );
}
