import {all, fork } from "redux-saga/effects"
import * as watchSVSaga from "../components/Projects/QLSV_Version2/watcherSaga";

export default function* rootSaga(){
  yield all([fork(watchSVSaga.watchQLSV_APISaga)])
}