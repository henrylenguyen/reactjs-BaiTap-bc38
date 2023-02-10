import {call, delay, put} from "redux-saga/effects"
import getDataQLSV  from "../../../API/QLSV_API";
import { SUCCESSED } from "../../../constants/Status";
import { setLoading, setSV } from "./QLSV_Version2_Slice";


export default function* handleSaga(){
  yield put(setLoading(true))
  try{
    yield delay(500);
    let reponse = yield call(getDataQLSV)
    const {data,status} = reponse;
    if(status===SUCCESSED){
      yield put(setSV(data))
    }
  }catch(errors){
    console.log(errors);
    
  }
  yield put(setLoading(false))
}