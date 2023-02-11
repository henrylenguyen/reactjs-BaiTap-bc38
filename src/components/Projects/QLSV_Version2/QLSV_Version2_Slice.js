import { createSlice } from "@reduxjs/toolkit";

const QLSV_APISlice = createSlice({
  name: "QLSV_API",
  initialState: {
    listSV: [],
    loading: true,
    updateSV: [],
    isUpdate: false,
    valid: false,
    searchSV: []
  },
  reducers: {
    getSV() {},
    setSV: (state, { payload }) => {
      return {
        ...state,
        listSV: payload,
      };
    },
    setLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
    EditSinhVien: (state, {payload}) => {
      return { ...state, updateSV: payload, isUpdate: true };
    },
    UpdateSinhVien: (state,{payload}) => {
      return {
        ...state,
        ...payload,
        isUpdate:false
      };
    },
    CancelUpdateSinhVien: (state,payload)=>{
      return {
        ...state,
        payload,
        isUpdate: false,
      };
    },
    DeleteSinhVien: (state,{payload}) => {
      return {
        ...state,
        ...payload,
        isUpdate: false,
      };
    },
    SearchSV: (state,{payload}) => {
      console.log("payload", payload);
      // return {
      //   ...state,
      //   searchSV:payload,
      // };
    },
  },
});
export const {
  getSV,
  setSV,
  setLoading,
  EditSinhVien,
  UpdateSinhVien,
  CancelUpdateSinhVien,
  DeleteSinhVien,
  SearchSV,
} = QLSV_APISlice.actions;
export default QLSV_APISlice.reducer;