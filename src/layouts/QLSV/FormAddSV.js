import React, { Component } from "react";
import { connect } from "react-redux";

class FormAddSV extends Component {
  state = {
    mssv: "",
    fullname: "",
    email: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.ThemSinhVien(this.state);
  }
  render() {
    return (
      <div className="my-5">
        <h2 className="bg-black text-white font-bold text-[2rem] md:text-[4rem] text-center p-3">
          Thông tin sinh viên
        </h2>
        <form
          autoComplete="off"
          className="text-white w-full grid grid-cols-2 blockSm padding-2 gap-10 p-10  bg-[#212F4F]"
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="mssv">Mã số sinh viên:</label>
            <input
              type="text"
              name="mssv"
              id="mssv"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              autoFocus
              value={this.state.mssv}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="fullname">Họ và tên:</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="p-5 bg-buttonBlue font-bold rounded-xl"
          >
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  // trả về 1 sự kiện
  return{
    ThemSinhVien: (sinhvien)=>{
      const action = {
        type: "QLSV/ThemSinhVien",
        sinhvien,
      };
      dispatch(action);
    }

  }
}
export default connect(null,mapDispatchToProps)(FormAddSV);
