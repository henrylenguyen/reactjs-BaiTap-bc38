import { takeLatest } from "redux-saga/effects";
import { CREATE_SV } from "../../../constants/QLSV";
import {handleCreateDataSaga, handleGetDataSaga} from "./handleSaga";
import { getSV } from "./QLSV_Version2_Slice";

export  function* watchQLSV_APISaga(){
  //Lắng nghe action cuối theo type
  yield takeLatest(getSV.type,handleGetDataSaga)
}
export function* watchCreateNewSV(){
yield takeLatest(CREATE_SV,handleCreateDataSaga)

}