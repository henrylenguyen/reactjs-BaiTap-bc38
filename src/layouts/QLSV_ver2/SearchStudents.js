import { debounce } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { GetValueSearchSV, SetValueSearchSV } from "../../components/Projects/QLSV_Version2/QLSV_Version2_Slice";

function SearchStudents() {
  const dispatch = useDispatch();
  const {register,getValues } = useForm();
  // Lấy giá trị từ input
  const handleChange = (e)=>{
    let search = getValues("search");
  dispatch(SetValueSearchSV(search));
  dispatch(GetValueSearchSV());

  }
  return (
    <div className="my-10 w-full lg:w-[50%] relative text-white">
      <input
        type="text"
        placeholder="Nhập MSSV hoặc tên sinh viên cần tìm"
        {...register("search", { onChange: handleChange })}
        className="p-5 w-full text-white bg-transparent border-b border-borderColor my-10 "
      />
      <i className="fa-solid fa-magnifying-glass absolute text-white right-5 top-[50%] translate-y-[-50%] text-[13px] md:text-[18px]"></i>
    </div>
  );
}
export default SearchStudents;
