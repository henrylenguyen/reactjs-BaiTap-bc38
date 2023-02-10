import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

//---------------------------Validate form-------------------------------
const schema = yup
  .object({
    mssv: yup
      .string()
      .required("Mã số sinh viên không được để trống")
      .matches(/[0-9]/, { message: "Mã số sinh viên phải là số" }),
    fullname: yup
      .string()
      .required("Họ và tên không được để trống")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        { message: "Họ và tên không được chứa số và ký tự đặc biệt" }
      ),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email phải có định dạng example@abc.com"),
    phone: yup
      .string()
      .required("Số điện thoại không được bỏ trống")
      .matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, {
        message: "Số điện thoại không đúng định dạng",
      }),
  })
  .required();

function FormAddUpdateStudents() {
  // ----------------------Dùng useForm để quản lý----------------------
  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    setFocus("mssv");
  }, [setFocus]);
  
  
  const submitForm = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          mssv: "",
          fullname: "",
          email: "",
          phone: "",
        });
       
      }, 2000);
    });
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
            placeholder="1911062251"
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
          className={`p-3 md:p-5 text-[13px] md:text-[18px]  font-bold rounded-xl bg-buttonBlue cursor-pointer ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="w-[20px] h-[20px] rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
          ) : (
            "Thêm sinh viên"
          )}
        </button>
      </form>
      {/* <DevTool control={control} placement="top-right" /> */}
    </div>
  );
}

export default FormAddUpdateStudents;
