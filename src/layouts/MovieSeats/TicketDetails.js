import React from "react";
import { useSelector } from "react-redux";
const convert = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const TicketDetails = () => {
  const { bookedSeatList } = useSelector((state) => state.MovieSeats);
  return (
    <div className="sm: p-[2rem] grid grid-cols-5 gap-5 md:p-[3rem] lg:grid-cols-2">
      {bookedSeatList.map((item, index) => (
        <button
          key={index}
          className={`w-full h-[3rem] md:h-[6rem] text-[1rem] md:text-[1.8rem]  relative border border-[#0868FD] text-white rounded-2xl`}
        >
          <i className="fas fa-xmark absolute right-[-0.5rem] top-[-0.5rem] rounded-full text-[1.5rem] bg-[#0868FD] text-white inline-block w-[2rem]  h-[2rem] leading-[2rem] "></i>
          <div className="flex flex-col h-full w-full">
            <span className="text-[#999]">Ghế {item.soGhe}</span>
            <span className="font-semibold">{convert.format(item.gia)}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TicketDetails;
