import { createSlice } from "@reduxjs/toolkit";

const QLSV_APISlice = createSlice({
  name: "QLSV_API",
  initialState:{
    listSV: [],
    loading: true
  },
  reducers:{
    getSV(){},
    setSV: (state,{payload}) => {
      return {
        ...state,
        listSV: payload,
      };
    },
    setLoading: (state,{payload}) => {
      console.log("payload", payload);
      return {
        ...state,
        loading: payload
      }
    }
  }
})
export const { getSV, setSV, setLoading } = QLSV_APISlice.actions;
export default QLSV_APISlice.reducer;