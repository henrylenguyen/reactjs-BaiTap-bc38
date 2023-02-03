import React from "react";
import BookingInfor from "./BookingInfor";
import BookingTicketDetails from "./BookingTicketDetails";
import Seats from "./SeatsList";
import TotalAndPaid from "./TotalAndPaid";

const seatInfor = [
  {
    id: 1,
    title: "Đã đặt",
    color: "#655F64",
  },
  {
    id: 2,
    title: "Đang chọn",
    color: "#FB01D4",
  },
  {
    id: 3,
    title: "Ghế thường",
    color: "#0E16DF",
  },
  {
    id: 4,
    title: "Ghế VIP",
    color: "#DF0E0E",
  },
];
const BookingTicketContainer = () => {
  return (
    <div className="bg-[#021224] w-full h-full text-white">
      <div className="mx-auto flex justify-between flex-col h-full  pt-[5rem] xl:pb-[5rem] gap-8 xl:flex-row sm:container md:p-5">
        <div className="xl:w-[65%]  sm:w-[100%] ">
          <div className="flex flex-col items-center">
            <img
              src={require("./images/Line 1.png")}
              className="w-[40rem] md:w-[50rem] md:ml-[5rem]"
              alt=""
            />
            <h3 className="md:ml-[5rem]">MÀN HÌNH</h3>
          </div>
          <Seats></Seats>
          <div className="xl:flex xl:justify-around xl:items-center grid grid-cols-2 p-[2rem] items-center">
            {seatInfor.map((item) => (
              <div key={item.id}>
                <span
                  className={`inline-block w-[30px] ${
                    item.id === 1
                      ? "bg-[#655F64]"
                      : item.id === 2
                      ? "bg-[#FB01D4]"
                      : item.id === 3
                      ? "bg-[#0E16DF]"
                      : item.id === 4
                      ? "bg-[#DF0E0E]"
                      : `bg-[${item.color}]`
                  }  h-[15px] mr-5`}
                ></span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full rounded-[2rem] xl:w-[35%]  sm:w-[100%] bg-[#212F4F]  rounded-b-none p-[1.5rem] md:rounded-[2rem] mt-[10rem]">
          <BookingInfor></BookingInfor>
          <BookingTicketDetails></BookingTicketDetails>
          <TotalAndPaid></TotalAndPaid>
        </div>
      </div>
    </div>
  );
};

export default BookingTicketContainer;
