import { takeLatest } from "redux-saga/effects";
import { CREATE_SV, UPDATE_SV } from "../../../constants/QLSV";
import {handleCreateDataSaga, handleDeleteDataSaga, handleGetDataSaga, handleUpdateDataSaga} from "./handleSaga";
import { DeleteSinhVien, getSV, UpdateSinhVien } from "./QLSV_Version2_Slice";

export  function* watchQLSV_APISaga(){
  //Lắng nghe action cuối theo type
  yield takeLatest(getSV.type,handleGetDataSaga)
  yield takeLatest(CREATE_SV,handleCreateDataSaga)
  yield takeLatest(UpdateSinhVien.type,handleUpdateDataSaga)
  yield takeLatest(DeleteSinhVien.type,handleDeleteDataSaga)
}
