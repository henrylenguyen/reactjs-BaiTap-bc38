import React from 'react';

const SeatDetails = () => {
  return (
    <div>
      <div className="md:text-[3rem] sm:text-[2rem] font-bold flex gap-20 md: items-center ">
        <img
          src={require("./images/ticket.png")}
          className="sm:w-[2rem] md:w-[5rem]"
          alt=""
        />
        <h3 className="md:w-full text-center">Thông tin đặt vé</h3>
      </div>
      <p className="sm:text-[1.5rem] md:text-[1.8rem]">
        Chỉnh sửa vị trí ghế tại màn hình hoặc ngay tại đây
      </p>
    </div>
  );
};

export default SeatDetails;