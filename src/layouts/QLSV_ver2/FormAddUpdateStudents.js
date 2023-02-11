import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import schema from "./validateSchema";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_SV, UPDATE_SV } from "../../constants/QLSV";
import { CancelUpdateSinhVien, UpdateSinhVien } from "../../components/Projects/QLSV_Version2/QLSV_Version2_Slice";

function FormAddUpdateStudents() {
  const { isUpdate, updateSV } = useSelector((state) => state.QLSV_API);
  const dispatch = useDispatch();
  // ----------------------Dùng useForm để quản lý----------------------
  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    setFocus("mssv");
    if (isUpdate) {
      // dùng entrie để tách đối tượng thành 1 mảng theo key và value
      let obj = Object.entries(updateSV);
      // sau khi tách xong thì set lại value
      obj.forEach((item) => setValue(item[0], item[1]));
    }
  }, [isUpdate, setFocus, setValue, updateSV]);

  const resetData = () => {
    reset({
      mssv: "",
      fullname: "",
      email: "",
      phone: "",
    });
  };
  const submitForm = (values) => {
    if (!isValid) return;
    if (!isUpdate) {
      dispatch({
        type: CREATE_SV,
        values,
      });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          resetData();
        }, 500);

        setFocus("mssv");
      });
    } else {
      dispatch(UpdateSinhVien(values));
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          resetData();
        }, 500);

        setFocus("mssv");
      });
    }
  };

  //----------------------------HỦY CẬP NHẬT SINH VIÊN--------------------------
  const handleCancelUpdate = () => {
    dispatch(CancelUpdateSinhVien());
    setFocus("mssv");
    resetData();
  };

  return (
    <div className="my-5">
      <h2 className="bg-black text-white font-bold text-[2rem] md:text-[4rem] text-center p-3">
        Thông tin sinh viên
      </h2>
      <form
        autoComplete="off"
        className="text-white w-full grid grid-cols-2 blockSm padding-2 gap-12 p-10  bg-[#212F4F]"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col gap-y-5">
          <label htmlFor="mssv" className="cursor-pointer">
            Mã số sinh viên:
          </label>
          <Input
            control={control}
            name="mssv"
            id="mssv"
            type="text"
            placeholder="1234...."
            disabled={isUpdate}
            isUpdate={isUpdate}
          ></Input>
          <span className="text-red-500 italic text-[13px] md:text-[18px]">
            {errors?.mssv?.message}
          </span>
        </div>

        <div className="flex flex-col gap-y-5">
          <label htmlFor="fullname" className="cursor-pointer">
            Họ và tên:
          </label>
          <Input
            control={control}
            name="fullname"
            id="fullname"
            type="text"
            placeholder="Nguyễn Văn A"
          ></Input>
          <span className="text-red-500 italic text-[13px] md:text-[18px]">
            {errors?.fullname?.message}
          </span>
        </div>
        <div className="flex flex-col gap-y-5">
          <label htmlFor="email" className="cursor-pointer">
            Email:
          </label>
          <Input
            control={control}
            name="email"
            id="email"
            type="email"
            placeholder="example@abc.com"
          ></Input>
          <span className="text-red-500 italic text-[13px] md:text-[18px]">
            {errors?.email?.message}
          </span>
        </div>
        <div className="flex flex-col gap-y-5">
          <label htmlFor="phone" className="cursor-pointer">
            Số điện thoại:
          </label>
          <Input
            control={control}
            name="phone"
            id="phone"
            type="text"
            placeholder="0789123456"
          ></Input>
          <span className="text-red-500 italic text-[13px] md:text-[18px]">
            {errors?.phone?.message}
          </span>
        </div>

        <button
          type="submit"
          className={`p-3 md:p-5 text-[13px] md:text-[18px]  font-bold rounded-xl  cursor-pointer ${
            isUpdate ? "bg-green-400" : "bg-buttonBlue"
          } ${isSubmitting ? "opacity-50" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-[20px] h-[20px] rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
          ) : isUpdate ? (
            "Cập Nhật Sinh Viên"
          ) : (
            "Thêm Sinh Viên"
          )}
        </button>
        {isUpdate ? (
          <button
            type="submit"
            className="p-3 md:p-5 text-[13px] md:text-[18px]  font-bold rounded-xl  cursor-pointer bg-red-400"
            onClick={handleCancelUpdate}
          >
            Hủy
          </button>
        ) : (
          ""
        )}
      </form>
      {/* <DevTool control={control} placement="top-right" /> */}
    </div>
  );
}

export default FormAddUpdateStudents;
