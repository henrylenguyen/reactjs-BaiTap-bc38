import {all, fork } from "redux-saga/effects"
import QLSV_APISaga from "../components/Projects/QLSV_Version2/watcherSaga"

export default function* rootSaga(){
  yield all([fork(QLSV_APISaga)])
}