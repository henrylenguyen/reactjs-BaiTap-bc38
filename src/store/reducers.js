import { combineReducers } from "@reduxjs/toolkit";
import MovieSeatsSlice from "../components/Projects/MovieSeats/MovieSeatsSlice";
import QLSVSlice from "../components/Projects/QLSV/QLSVSlice";


const reducer = combineReducers({
  MovieSeats: MovieSeatsSlice,
  QLSV: QLSVSlice,
});
export default reducer;
