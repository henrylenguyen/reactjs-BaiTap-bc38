import axios from "axios";
export default function getDataQLSV(){
  return axios.request({
    method: "GET",
    url: "https://63d9c8f52af48a60a7bf8aa1.mockapi.io/QuanLySinhVien",
  });
}