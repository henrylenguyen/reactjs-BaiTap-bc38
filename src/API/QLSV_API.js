import axios from "axios";


export  function getDataQLSV(){
  return axios.request({
    method: "GET",
    url: "https://63d9c8f52af48a60a7bf8aa1.mockapi.io/QuanLySinhVien",
  });
}
export  function CreateDataQLSV(data){
  return axios.request({
    method: "POST",
    url: "https://63d9c8f52af48a60a7bf8aa1.mockapi.io/QuanLySinhVien",
    data
  });
}
export  function DeleteDataQLSV(id){
  return axios.request({
    method: "DELETE",
    url: "https://63d9c8f52af48a60a7bf8aa1.mockapi.io/QuanLySinhVien/"+id,
  });
}