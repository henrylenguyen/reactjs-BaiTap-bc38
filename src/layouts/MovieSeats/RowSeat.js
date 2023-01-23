import React from "react";
// import { connect} from "react-redux";
const RowSeat = (props) => {
  const renderSeat = () => {
    if (props.columnSeat === 0) {
      return props.hanghe.danhSachGhe.map((item, index) => {
        return (
          <span
            key={index}
            className="w-[2rem] md:w-[5rem] text-[1rem] md:text-[1.8rem]  text-center"
          >
            {item.soGhe}
          </span>
        );
      });
    } else {
      return props.hanghe.danhSachGhe.map((item, index) => {
        return (
          <button
            onClick={() => alert("a")}
            disabled={item.daDat ? true : false}
            key={index}
            // trạng thái ghế màu vàng là đã đặt màu xanh là chưa đặt
            className={`w-[2rem] md:w-[5rem] text-[1rem] md:text-[1.8rem] ${
              item.daDat ? "bg-yellow-400 cursor-no-drop" : "bg-green-500"
            }`}
          >
            {item.soGhe}
          </button>
        );
      });
    }
  };
  return (
    <div className="pt-3 font-bold text-[2.5rem] flex justify-around w-full">
      <span className="p-3 inline-block w-[2rem] md:w-[5rem] text-[1rem] md:text-[1.8rem]  text-center">
        {props.hanghe.hang}
      </span>
      {renderSeat()}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     bookedSeatList: state.MovieSeatsSlice.bookedSeatList,
//   };
// };
// export default connect(mapStateToProps)(RowSeat);
export default RowSeat;
