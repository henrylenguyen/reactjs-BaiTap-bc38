import * as yup from "yup";

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
export default schema;