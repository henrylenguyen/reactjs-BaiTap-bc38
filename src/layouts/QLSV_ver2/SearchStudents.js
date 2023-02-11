import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/input/Input";



function SearchStudents() {
  const { searchSV } = useSelector((state) => state.QLSV_API);
  const dispatch = useDispatch();
  const { control,register } = useForm(); 
  const handleChange = (e)=>{
    console.log(e)
  }
  return (
    <div className="my-10 w-full lg:w-[50%] relative text-white">
      <input
        type="text"
        placeholder="Nhập MSSV hoặc tên sinh viên cần tìm"
        {...register("search",{  onChange: (e) => console.log(e.value)})}
        className="p-5 w-full text-white bg-transparent border-b border-borderColor my-10 "
        
      />
      <i className="fa-solid fa-magnifying-glass absolute text-white right-5 top-[50%] translate-y-[-50%] text-[13px] md:text-[18px]"></i>
    </div>
  );
}
export default SearchStudents;
