import React from "react";
import SeatDetails from "./SeatDetails";
import Seats from "./Seats";
import TicketDetails from "./TicketDetails";
import TotalPrice from "./TotalPrice";

const LayoutMovieSeats = () => {
  return (
    <div className="bg-[#021224] w-full h-full text-white">
      <div className="mx-auto flex justify-between flex-col h-full  pt-[5rem] lg:pb-[5rem] gap-8 lg:flex-row sm:container md:p-5">
        <div className="lg:w-[65%]  sm:w-[100%] ">
          <div className="flex flex-col items-center">
            <img
              src={require("./images/Line 1.png")}
              className="w-[40rem] md:w-[50rem] md:ml-[5rem]"
              alt=""
            />
            <h3 className="md:ml-[5rem]">MÀN HÌNH</h3>
          </div>
          <Seats></Seats>
          <div>
            <span className="before:w-[10px] h-[10px] bg-red-900">Đã đặt</span>
            <span>Đang chọn</span>
            <span>Ghế thường</span>
            <span>Ghế Vip</span>
          </div>
        </div>
        <div className="w-full h-full rounded-[2rem] lg:w-[35%]  sm:w-[100%] bg-[#212F4F]  rounded-b-none p-[1.5rem] md:rounded-[2rem] mt-[10rem]">
          <SeatDetails></SeatDetails>
          <TicketDetails></TicketDetails>
          <TotalPrice></TotalPrice>
        </div>
      </div>
    </div>
  );
};

export default LayoutMovieSeats;
