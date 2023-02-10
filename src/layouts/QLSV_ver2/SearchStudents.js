import React from "react";

function SearchStudents() {

    return (
      <div>
        <input
          type="text"
          placeholder="Nhập MSSV hoặc tên sinh viên cần tìm"
          className="p-5 w-[100%] md:w-[50%] text-white bg-transparent border-b border-borderColor my-10 "
        />
      </div>
    );
}
export default SearchStudents;
