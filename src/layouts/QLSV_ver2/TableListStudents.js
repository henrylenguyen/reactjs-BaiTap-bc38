import React from "react";
import RenderListSV from "./RenderListSV";
import SearchStudents from "./SearchStudents";
function TableSV() {
  
  //   const { SVList, filter } = this.props;
  //   return filter.length > 0
  //     ? filter.map((sv, index) => {
  //         return (
  //           <tr
  //             key={index}
  //             className="text-[1.3rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
  //           >
  //             <td className=" p-[1rem] md:p-[2rem] border-r  whitespace-nowrap border-borderColor">
  //               {sv.mssv}
  //             </td>
  //             <td className="p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.fullname}
  //             </td>
  //             <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.phone}
  //             </td>
  //             <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.email}
  //             </td>
  //             <td>
  //               <div className="flex items-center justify-center gap-3 p-3">
  //                 <button
  //                   className="bg-green-400 p-3  rounded-xl text-[1rem] md:text-[1.8rem] md:p-5"
  //                   onClick={() => this.handleEdit(sv)}
  //                 >
  //                   <i className="fa-solid fa-wrench  "></i>
  //                 </button>
  //                 <button
  //                   className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
  //                   onClick={() => this.handleDelete(index)}
  //                 >
  //                   <i className="fa-solid fa-trash"></i>
  //                 </button>
  //               </div>
  //             </td>
  //           </tr>
  //         );
  //       })
  //     : SVList.map((sv, index) => {
  //         return (
  //           <tr
  //             key={index}
  //             className="text-[1.3rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
  //           >
  //             <td className=" p-[1rem] md:p-[2rem] border-r  whitespace-nowrap border-borderColor">
  //               {sv.mssv}
  //             </td>
  //             <td className="p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.fullname}
  //             </td>
  //             <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.phone}
  //             </td>
  //             <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
  //               {sv.email}
  //             </td>
  //             <td>
  //               <div className="flex items-center justify-center gap-3 p-3">
  //                 <button
  //                   className="bg-green-400 p-3  rounded-xl text-[1rem] md:text-[1.8rem] md:p-5"
  //                   onClick={() => this.handleEdit(sv)}
  //                 >
  //                   <i className="fa-solid fa-wrench  "></i>
  //                 </button>
  //                 <button
  //                   className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
  //                   onClick={() => this.handleDelete(index)}
  //                 >
  //                   <i className="fa-solid fa-trash"></i>
  //                 </button>
  //               </div>
  //             </td>
  //           </tr>
  //         );
  //       });
  // };
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
                <th className=" p-[1rem] md:p-[2rem] whitespace-nowrap">
                  Email
                </th>
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
