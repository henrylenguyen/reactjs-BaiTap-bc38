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
      let ListSeatsBookedUpdate = [...state.bookedSeatList];
      let index = ListSeatsBookedUpdate.findIndex(item=>item.soGhe===action.payload.soGhe);
      if(index!==-1){
        ListSeatsBookedUpdate.splice(index,1);
      }
      else{
        ListSeatsBookedUpdate.push(action.payload);
      }
      return {
        ...state,
        bookedSeatList: ListSeatsBookedUpdate,
      };
    }
  }
});
export const { bookSeatTicket } = MovieSeatsSlice.actions;
export default MovieSeatsSlice.reducer;