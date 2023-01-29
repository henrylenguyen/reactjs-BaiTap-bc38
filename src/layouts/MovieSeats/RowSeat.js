import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSeatTicket } from "../../components/Projects/MovieSeats/MovieSeatsSlice";
// import { connect} from "react-redux";
const RowSeat = (props) => {
  const priceSeat = (price) => {
    if (price === 100000) {
      return "bg-[#DF0E0E]";
    } else {
      return "bg-[#0E16DF]";
    }
  };
  const { bookedSeatList } = useSelector((state) => state.MovieSeats);
  const dispatch = useDispatch();
  // Danh sách hàng ghế
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
        let cssChoosing = " ";
        let ChoosingSeat = bookedSeatList.findIndex(
          (choosing) => choosing.soGhe === item.soGhe
        );
        if (ChoosingSeat !== -1) {
          cssChoosing = "bg-[#FB01D4!important]";
        }

        return (
          <button
            onClick={() => dispatch(bookSeatTicket(item))}
            disabled={item.daDat ? true : false}
            key={index}
            // trạng thái ghế màu hồng là đã đặt màu xanh là chưa đặt
            className={`w-[2rem] md:w-[5rem] text-[1rem] md:text-[1.8rem]  ${
              item.daDat ? "bg-[#655F64] cursor-no-drop" : priceSeat(item.gia)
            } ${cssChoosing}`}
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
