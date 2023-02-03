import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSeatTicket } from "../../components/Projects/MovieSeats/MovieSeatsSlice";
const convert = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const BookingTicketDetails = () => {
  const { bookedSeatList } = useSelector((state) => state.MovieSeats);
  const dispatch = useDispatch();
  return (
    <div className="sm: p-[2rem] grid grid-cols-3 gap-5 md:p-[3rem] sm:grid-cols-4 xl:grid-cols-2">
      {bookedSeatList.map((item, index) => (
        <button
          key={index}
          className={`w-full h-[4rem] md:h-[6rem] text-[1rem] md:text-[1.8rem]  relative border border-[#0868FD] text-white rounded-2xl`}
        >
          <i
            className="fas fa-xmark absolute right-[-0.5rem] top-[-0.5rem] rounded-full text-[1rem] bg-[#0868FD] text-white inline-block w-[1.2rem]  h-[1.2rem] leading-[1.2rem]  md:w-[2rem] md:h-[2rem] md:leading-[2rem] md:text-[1.5rem]"
            onClick={() => dispatch(bookSeatTicket(item))}
          ></i>
          <div className="flex flex-col h-full w-full">
            <span className="text-[#999]">Ghế {item.soGhe}</span>
            <span className="font-semibold">{convert.format(item.gia)}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default BookingTicketDetails;
