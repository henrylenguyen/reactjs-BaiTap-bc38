import { combineReducers } from "@reduxjs/toolkit";
import MovieSeatsSlice from "../components/Projects/MovieSeats/MovieSeatsSlice";


const reducer = combineReducers({
  MovieSeats: MovieSeatsSlice,
});
export default reducer;
