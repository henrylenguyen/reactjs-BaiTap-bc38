import React, { Component } from "react";
import { connect } from "react-redux";

class FormAddUpdateStudents extends Component {
  rexSpecialCharacter = /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  rexNumber = /[0-9]/;
  rexCharacter = /[a-zA-Z]/;
  state = {
    values: {
      mssv: "",
      fullname: "",
      email: "",
      phone: "",
    },
    errors: {
      mssv: "",
      fullname: "",
      email: "",
      phone: "",
    },
  };

  handleChange = (e) => {
    let { name, value, type, pattern } = e.target;
    let newName;
    // ------------------BIẾN ĐỔI TOÀN BỘ SANG TIẾNG VIỆT-----------------------
    if (name === "mssv") {
      newName = "Mã số sinh viên";
    } else if (name === "fullname") {
      newName = "Họ và tên";
    } else if (name === "phone") {
      newName = "Số điện thoại";
    } else {
      newName = "Email";
    }
    let errorMassages = "";
    // kiểm tra rỗng => bỎ trống đầu cuối
    if (value.trim() === "") {
      errorMassages = `${newName} không được bỏ trống`;
    }
    //---------------------KIỂM TRA MÃ SỐ SINH VIÊN----------------------
    if (name === "mssv") {
      if (this.rexCharacter.test(value.toString())) {
        errorMassages = `${newName} phải là số`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
      if (value.toString().match(this.rexSpecialCharacter)) {
        errorMassages = `${newName} không được chứa ký tự đặc biệt`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
    }
    //---------------------KIỂM TRA EMAIL--------------------------
    if (type === "email") {
      const regex = new RegExp(pattern);

      if (!regex.test(value.toString())) {
        errorMassages = `${newName} không đúng định dạng!`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
    }
    // -------------------KIỂM TRA SỐ ĐIỆN THOẠI------------------------------------
    if (type === "tel") {
      const regex = new RegExp(pattern);
      if (!regex.test(value.toString())) {
        errorMassages = `${newName} không đúng định dạng!`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
    }
    // -------------------------KIỂM TRA HỌ VÀ TÊN------------------------------
    if (name === "fullname") {
      if (this.rexNumber.test(value.toString())) {
        errorMassages = `${newName} không được chứa số`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
      if (value.toString().match(this.rexSpecialCharacter)) {
        errorMassages = `${newName} không được chứa ký tự đặc biệt`;
        if (value.trim() === "") {
          errorMassages = `${newName} không được bỏ trống`;
        }
      }
    }
    // cập nhật lại giá trị và lỗi cho state, dùng [] là cập nhật động
    let valuesUpdate = { ...this.state.values, [name]: value };
    let errorsUpdate = { ...this.state.errors, [name]: errorMassages };
    this.setState(
      {
        ...this.state,
        values: valuesUpdate,
        errors: errorsUpdate,
      },
      () => {
        this.checkValid();
      }
    );
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.props.ThemSinhVien(this.state.values);

  // };
  handleReset = () => {
    this.setState({
      ...this.state,
      values: {
        mssv: "",
        fullname: "",
        email: "",
        phone: "",
      },
    });
  };
  handleAdd = (e) => {
    e.preventDefault();
    this.props.ThemSinhVien(this.state.values);
    this.handleReset();
  };
  handleUpdate = (e) => {
    e.preventDefault();
    this.props.CapNhatSinhVien(this.state.values);
    this.handleReset();
    // this.props.buttonUpdate = false;
  };
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.props.KiemTraHopLe(valid);
  };

  // static getDerivedStateFromProps(newProps,currentState){
  //   console.log("newProps", newProps);
  //   console.log("currentState", currentState);
  //   let newState = { ...currentState, values: newProps.svUpdate };
  //   return newState;
  // }
  render() {
    return (
      <div className="my-5">
        <h2 className="bg-black text-white font-bold text-[2rem] md:text-[4rem] text-center p-3">
          Thông tin sinh viên
        </h2>
        <form
          autoComplete="off"
          className="text-white w-full grid grid-cols-2 blockSm padding-2 gap-12 p-10  bg-[#212F4F]"
          // onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="mssv">Mã số sinh viên:</label>
            {this.props.buttonUpdate && this.props.buttonUpdate ? (
              <input
                type="text"
                name="mssv"
                id="mssv"
                className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-gray-500"
                disabled
                value={this.state.values.mssv}
                onChange={this.handleChange}
              />
            ) : (
              <input
                type="text"
                name="mssv"
                id="mssv"
                className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
                autoFocus
                value={this.state.values.mssv}
                onChange={this.handleChange}
              />
            )}
            <span className="text-red-500 italic text-[13px] md:text-[18px]">
              {this.state.errors.mssv}
            </span>
          </div>
          <div>
            <label htmlFor="fullname">Họ và tên:</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.values.fullname}
              onChange={this.handleChange}
            />
            <span className="text-red-500 italic text-[13px] md:text-[18px]">
              {this.state.errors.fullname}
            </span>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.values.email}
              onChange={this.handleChange}
              pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            />
            <span className="text-red-500 italic text-[13px] md:text-[18px]">
              {this.state.errors.email}
            </span>
          </div>
          <div>
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full py-5 px-10 bg-transparent border-b border-borderColor text-[2rem] text-white"
              value={this.state.values.phone}
              onChange={this.handleChange}
              pattern="([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b"
            />
            <span className="text-red-500 italic text-[13px] md:text-[18px]">
              {this.state.errors.phone}
            </span>
          </div>
          {this.props.buttonUpdate && this.props.buttonUpdate ? (
            <button
              type="submit"
              disabled={this.props.valid ? false : true}
              onClick={this.handleUpdate}
              className={`p-3 md:p-5 text-[13px] md:text-[18px]  font-bold rounded-xl 
                          ${
                            this.props.valid
                              ? "bg-green-400 cursor-pointer"
                              : "bg-slate-500 cursor-not-allowed"
                          }`}
            >
              Cập nhật sinh viên
            </button>
          ) : (
            <button
              type="submit"
              disabled={this.props.valid ? false : true}
              onClick={this.handleAdd}
              className={`p-3 md:p-5 text-[13px] md:text-[18px]  font-bold rounded-xl 
                          ${
                            this.props.valid
                              ? "bg-buttonBlue cursor-pointer"
                              : "bg-slate-500 cursor-not-allowed"
                          }`}
            >
              Thêm sinh viên
            </button>
          )}
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.svUpdate.mssv !== this.props.svUpdate.mssv) {
      this.setState({
        ...this.state,
        values: this.props.svUpdate,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    svUpdate: state.QLSV.svUpdate,
    buttonUpdate: state.QLSV.buttonUpdate,
    valid: state.QLSV.valid,
  };
};
const mapDispatchToProps = (dispatch) => {
  // trả về 1 sự kiện
  return {
    ThemSinhVien: (sinhvien) => {
      const action = {
        type: "QLSV/ThemSinhVien",
        sinhvien,
      };
      dispatch(action);
    },
    CapNhatSinhVien: (sinhvien) => {
      const action = {
        type: "QLSV/CapNhatSinhVien",
        sinhvien,
      };
      dispatch(action);
    },
    KiemTraHopLe: (kiemTra) => {
      const action = {
        type: "QLSV/KiemTraHopLe",
        kiemTra,
      };
      dispatch(action);
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAddUpdateStudents);
