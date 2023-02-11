import { call, delay, put } from "redux-saga/effects";
import * as QLSVAPI from "../../../API/QLSV_API";
import { SUCCESSED, CREATED } from "../../../constants/Status";
import { getSV, setLoading, setSV } from "./QLSV_Version2_Slice";

export function* handleGetDataSaga() {
  yield put(setLoading(true));
  try {
    yield delay(500);
    let reponse = yield call(QLSVAPI.getDataQLSV);
    const { data, status } = reponse;
    if (status === SUCCESSED) {
      //put là dispatch action
      yield put(setSV(data));
    }
  } catch (errors) {
    console.log(errors);
  }
  yield put(setLoading(false));
}
export function* handleCreateDataSaga({ values }) {
  let { status } = yield call(() => {
    return QLSVAPI.CreateDataQLSV(values);
  });
  if (status === CREATED) {
    yield put(getSV());
  }
}
// khi dispatch sẽ kèm theo values của input, dùng destructuring lấy ra id và các phần còn lại để gửi lên API
export function* handleUpdateDataSaga({payload:{id,...rest}}){
   let { status } = yield call(() => {
    return QLSVAPI.UpdateDataQLSV(id,rest);
  });
   if (status === SUCCESSED) {
    yield put(getSV());
  }
}
export function* handleDeleteDataSaga({payload}){
   let { status } = yield call(() => {
    return QLSVAPI.DeleteDataQLSV(payload);
  });
   if (status === SUCCESSED) {
    yield put(getSV());
  }
}
