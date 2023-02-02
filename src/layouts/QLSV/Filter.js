import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {
  handleFilter = (e) => {
    const { value } = e.target;
    this.props.TimKiemSinhVien(value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nhập MSSV hoặc tên sinh viên cần tìm"
          className="p-5 w-[100%] md:w-[50%] text-white bg-transparent border-b border-borderColor my-10 "
          onChange={this.handleFilter}
          value={this.props.value}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    TimKiemSinhVien: (sinhvien) => {
      const action = {
        type: "QLSV/TimKiemSinhVien",
        sinhvien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Filter);
