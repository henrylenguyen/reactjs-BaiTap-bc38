import { createSlice } from "@reduxjs/toolkit";

const QLSV_APISlice = createSlice({
  name: "QLSV_API",
  initialState: {
    listSV: [],
    loading: true,
    updateSV: [],
    isUpdate: false,
    valid: false,
    getSearchSV: "",
    setSearchSV: [],
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
    EditSinhVien: (state, { payload }) => {
      return { ...state, updateSV: payload, isUpdate: true };
    },
    UpdateSinhVien: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isUpdate: false,
      };
    },
    CancelUpdateSinhVien: (state, payload) => {
      return {
        ...state,
        payload,
        isUpdate: false,
      };
    },
    DeleteSinhVien: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isUpdate: false,
      };
    },
    SetValueSearchSV: (state, { payload }) => {
      return {
        ...state,
        getSearchSV: payload,
      };
    },
    GetValueSearchSV: (state, actions) => {
      if (state.getSearchSV !== "") {
        let newSV = state.listSV.map((item) => {
          if (
            item.mssv.includes(state.getSearchSV) ||
            item.fullname.toLowerCase().includes(state.getSearchSV.toLocaleLowerCase())
          ) {
            return item;
          }
          return ""
        });
        return {
          ...state,
          setSearchSV : newSV,
        };
      }
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
  SetValueSearchSV,
  GetValueSearchSV,
} = QLSV_APISlice.actions;
export default QLSV_APISlice.reducer;
