import { createSlice } from "@reduxjs/toolkit";

const MovieSeatsSlice = createSlice({
  name: "MovieSeats",
  initialState:{
    bookedSeatList: [
      // {soghe: 1,gia: 8000}
    ]
  },
  reducers:{
    bookSeatTicket: (state,action)=>{
      return{
        ...state,
        bookedSeatList: action.payload
      }
    }
  }
});
export const { bookSeatTicket } = MovieSeatsSlice.actions;
export default MovieSeatsSlice.reducer;