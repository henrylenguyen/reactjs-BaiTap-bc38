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
      },
      {
        mssv: 2,
        fullname: "Lê Nguyễn Phương Thảo",
        phone: "0123456789",
        email: "mail@gmail.com",
      },
      {
        mssv: 3,
        fullname: "Trần Mẫn Nghi",
        phone: "0123456789",
        email: "mail@gmail.com",
      },
      {
        mssv: 1911062251,
        fullname: "Lê Nguyễn Phương Hồng Thủy",
        phone: "0123456789",
        email: "mail@gmail.com",
      },
    ],
    svUpdate: {},
    buttonUpdate: false,
    valid: false,
    filter: [],
  },
  reducers: {
    KiemTraHopLe: (state, action) => {
      return {
        ...state,
        valid: action.kiemTra,
      };
    },
    // DanhSachSinhVien
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
    TimKiemSinhVien: (state, { sinhvien }) => {
      let svFilter = [...state.SVList];
      let search = sinhvien.trim().toLowerCase();
      if (search === "") {
        console.log("Đang tìm cách xử lý")
      } else {
        let index = svFilter.findIndex(
          (sv) =>
            sv.fullname.toLowerCase().includes(search) ||
            sv.mssv.toString() === search
        );
        if (index !== -1) {
          return {
            ...state,
            filter: [svFilter[index]],
          };
        }
      }
    },
  },
});

export const { ThemSinhVien } = QLSVSlice.actions;
export default QLSVSlice.reducer;
