import React from "react";
import danhSachGhe from "./danhSachGhe.json";
import RowSeat from "./RowSeat";

const seatList = () => {
  // Danh sách ghế ngồi
  return danhSachGhe.map((item, index) => {
    return (
      <div className="flex" key={index}>
        <RowSeat columnSeat={index} hanghe={item}></RowSeat>
      </div>
    );
  });
};

const Seats = () => {
  return <div className="md:p-[2rem] p-[1rem]">{seatList()}</div>;
};

export default Seats;
