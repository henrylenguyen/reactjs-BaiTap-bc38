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
    ],
  },
  reducers: {
    ThemSinhVien: (state, action) => {
      console.log(state);
      console.log(action);
      return {
        ...state,
        SVList: [...state.SVList, action.sinhvien],
      };
    },
  },
});

export const { ThemSinhVien } = QLSVSlice.actions;
export default QLSVSlice.reducer;
