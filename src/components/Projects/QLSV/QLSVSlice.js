import { createSlice } from "@reduxjs/toolkit";

const QLSVSlice = createSlice({
  name: "QLSV",
  initialState: {
    SVList: [
      {
        mssv: 1,
        fullname: "Lê Nguyễn Phương Thái",
        phone: "0123456789",
        email: "mail@gmail.com",
      }
    ],
    svUpdate: {},
    buttonUpdate: false,
    valid: false,
  },
  reducers: {
    KiemTraHopLe: (state,action)=>{
      return {
        ...state,
        valid: action.kiemTra,
      };
    },
    ThemSinhVien: (state, action) => {
      return {
        ...state,
        SVList: [...state.SVList, action.sinhvien],
      };
    },
    XoaSinhVien: (state, action) => {
      const newSvList = [...state.SVList];

      newSvList.splice(action.id, 1);
      return {
        ...state,
        SVList: newSvList,
      };
    },
    EditSinhVien: (state, { sinhvien }) => {
      return { ...state, svUpdate: sinhvien, buttonUpdate: true };
    },
    CapNhatSinhVien: (state, { sinhvien }) => {
      state.svUpdate = {
        ...state.svUpdate,
        fullname: sinhvien.fullname,
        phone: sinhvien.phone,
        email: sinhvien.email,
      };
      let svListUpdate = [...state.SVList];
      // Tìm trong SVList lấy ra phần tử cần cập nhật và so sánh với phần tử người dùng cần cập nhật

      let index = svListUpdate.findIndex(
        (sv) => sv.mssv === state.svUpdate.mssv
      );
      //Nếu tìm ra sinh viên có mã số sinh viên trùng mã số cần tìm thì cập nhật lại
      if (index !== -1) {
        svListUpdate[index] = state.svUpdate;
      }
      // Cập nhật lại state
      state.SVList = svListUpdate;
      state.buttonUpdate = false;
      state.valid = false;
      return state;
    },
  },
});

export const { ThemSinhVien } = QLSVSlice.actions;
export default QLSVSlice.reducer;
