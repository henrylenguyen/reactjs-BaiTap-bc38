import { combineReducers } from "@reduxjs/toolkit";
import MovieSeatsSlice from "../components/Projects/MovieSeats/MovieSeatsSlice";
import QLSVSlice from "../components/Projects/QLSV/QLSVSlice";

import QLSV_APISlice from "../components/Projects/QLSV_Version2/QLSV_Version2_Slice";

const reducer = combineReducers({
  MovieSeats: MovieSeatsSlice,
  QLSV: QLSVSlice,
  QLSV_API: QLSV_APISlice,
});
export default reducer;
