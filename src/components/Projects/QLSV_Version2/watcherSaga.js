import { takeLatest } from "redux-saga/effects";
import handleSaga from "./handleSaga";
import { getSV } from "./QLSV_Version2_Slice";

export default function* QLSV_APISaga(){
  yield takeLatest(getSV.type,handleSaga)
}