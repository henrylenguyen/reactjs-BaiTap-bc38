import React from "react";
import RenderListSV from "./RenderListSV";
import SearchStudents from "./SearchStudents";
function TableSV() {
  return (
    <div className="mb-20 ">
      <SearchStudents></SearchStudents>
      <div className="overflow-auto">
        <table className="table-auto w-full text-center ">
          <thead>
            <tr className="bg-black text-[1.3rem] md:text-[1.8rem] text-white">
              <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                Mã số sinh viên
              </th>
              <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                Họ và tên
              </th>
              <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                Số điện thoại
              </th>
              <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">Email</th>
              <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                <i className="fa-solid fa-gear"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderListSV></RenderListSV>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSV;
