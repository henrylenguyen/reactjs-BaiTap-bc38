import React from 'react';

const TotalPrice = () => {
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={require("./images/bill.png")}
          className="w-[5rem] lg:w-[10rem]"
          alt=""
        />
        <h3 className="text-[2rem] md:text-[3rem]">640.000đ</h3>
      </div>
      <button className="rounded-[3rem] bg-[#0368FE] py-2 px-[2rem] text-white font-semibold md:py-5 md:px-[3rem] ">
        Tiếp tục
      </button>
    </div>
  );
};

export default TotalPrice;