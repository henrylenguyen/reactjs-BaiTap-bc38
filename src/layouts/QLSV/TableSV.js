import React, { Component } from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
/**
 * Bài tập được xây dựng bằng class component kết hợp với redux toolkit
 * Hàm mapStateToProps nếu viết bằng function component sẽ được thay thế bằng useSelector
 * mapStateToProps trả về giá trị = state.nameReducer.initialState
 */

class TableSV extends Component {
  handleDelete = (id) => {
    // console.log(id);
    this.props.XoaSinhVien(id);
  };
  handleEdit = (sinhvien) => {
    this.props.EditSinhVien(sinhvien);
  };

  renderSinhVien = () => {
    const { SVList,filter } = this.props;
    return ( filter.length>0 ? filter.map((sv,index)=>{
      return (
        <tr
          key={index}
          className="text-[1.3rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
        >
          <td className=" p-[1rem] md:p-[2rem] border-r  whitespace-nowrap border-borderColor">
            {sv.mssv}
          </td>
          <td className="p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.fullname}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.phone}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.email}
          </td>
          <td>
            <div className="flex items-center justify-center gap-3 p-3">
              <button
                className="bg-green-400 p-3  rounded-xl text-[1rem] md:text-[1.8rem] md:p-5"
                onClick={() => this.handleEdit(sv)}
              >
                <i className="fa-solid fa-wrench  "></i>
              </button>
              <button
                className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
                onClick={() => this.handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    }) : SVList.map((sv, index) => {
      return (
        <tr
          key={index}
          className="text-[1.3rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
        >
          <td className=" p-[1rem] md:p-[2rem] border-r  whitespace-nowrap border-borderColor">
            {sv.mssv}
          </td>
          <td className="p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.fullname}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.phone}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.email}
          </td>
          <td>
            <div className="flex items-center justify-center gap-3 p-3">
              <button
                className="bg-green-400 p-3  rounded-xl text-[1rem] md:text-[1.8rem] md:p-5"
                onClick={() => this.handleEdit(sv)}
              >
                <i className="fa-solid fa-wrench  "></i>
              </button>
              <button
                className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
                onClick={() => this.handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    }))
  };
  render() {
    return (
      <div className="mb-20">
        <Filter></Filter>
        <div className="overflow-auto">
          <table className="table-auto w-full   text-center ">
            <thead>
              <tr className="bg-black text-[1.3rem] md:text-[1.8rem] text-white">
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  Mã số sinh viên
                </th>
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  Họ và tên
                </th>
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  Số điện thoại
                </th>
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  Email
                </th>
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  <i className="fa-solid fa-gear"></i>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderSinhVien()}</tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidUpdate(prev) {
    //  `console.log("prev",prev);
  }
}

const mapStateToProps = (state) => {
  return {
    SVList: state.QLSV.SVList,
    svUpdate: state.QLSV.svUpdate,
    filter: state.QLSV.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  // trả về 1 sự kiện
  return {
    XoaSinhVien: (id) => {
      const action = {
        type: "QLSV/XoaSinhVien",
        id,
      };
      dispatch(action);
    },
    EditSinhVien: (sinhvien) => {
      const action = {
        type: "QLSV/EditSinhVien",
        sinhvien,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSV);
