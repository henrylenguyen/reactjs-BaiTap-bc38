import React, { Component } from "react";
import { connect } from "react-redux";
/**
 * Bài tập được xây dựng bằng class component kết hợp với redux toolkit
 * Hàm mapStateToProps nếu viết bằng function component sẽ được thay thế bằng useSelector
 * mapStateToProps trả về giá trị = state.nameReducer.initialState
 */
class TableSV extends Component {
  renderSinhVien = () => {
    const { SVList } = this.props;
    return SVList.map((sv, index) => {
      return (
        <tr
          key={index}
          className="text-[1rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
        >
          <td className=" p-[1rem] md:p-[2rem] border-r border-borderColor">
            {sv.mssv}
          </td>
          <td className="p-[1rem] md:p-[2rem] border-r border-borderColor">
            {sv.fullname}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r border-borderColor">
            {sv.phone}
          </td>
          <td>{sv.email}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="mb-20">
        <input
          type="text"
          placeholder="Nhập MSSV hoặc tên sinh viên cần tìm"
          className="p-5 w-[50%] text-white bg-transparent border-b border-borderColor my-10 "
        />
        <table className="table-fixed w-full   text-center ">
          <thead>
            <tr className="bg-black text-[1rem] md:text-[1.8rem] text-white">
              <th className=" p-[1rem] md:p-[2rem]">Mã số sinh viên</th>
              <th className=" p-[1rem] md:p-[2rem]">Họ và tên</th>
              <th className=" p-[1rem] md:p-[2rem]">Số điện thoại</th>
              <th className=" p-[1rem] md:p-[2rem]">Email</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    SVList: state.QLSV.SVList,
  };
};
export default connect(mapStateToProps, null)(TableSV);
