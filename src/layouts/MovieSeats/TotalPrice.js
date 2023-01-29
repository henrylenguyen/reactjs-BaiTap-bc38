import React from 'react';
import { useSelector } from 'react-redux';
import Swal from "sweetalert2";
import "../../components/Projects/MovieSeats/sweetAlert.css"
const TotalPrice = () => {
 const { bookedSeatList } = useSelector((state) => state.MovieSeats);
const convert = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
  const handleTotalPrice = ()=>{
    return bookedSeatList.reduce((prev, current) => {
      return prev + current.gia; 
    }, 0);
  }
  const handlePaid = ()=>{

       const swalWithBootstrapButtons = Swal.mixin({
         customClass: {
           confirmButton: "ml-[2rem] bg-[#00d566] p-3 text-white rounded-xl",
           cancelButton: "bg-[#ff0404] p-3 text-white rounded-xl",
         },
         buttonsStyling: false,
       });

       swalWithBootstrapButtons
         .fire({
           showClass: {
             popup: "animate__animated animate__fadeInDown",
           },
           hideClass: {
             popup: "animate__animated animate__fadeOutUp",
           },
           title: "Kiểm tra lại",
           text: `Tổng tiền của bạn là: ${convert.format(total)}`,
           icon: "info",
           width: "50rem",
           showCancelButton: true,
           confirmButtonText: "Thanh toán",
           cancelButtonText: "Không mua nữa",
           reverseButtons: true,
         })
         .then((result) => {
           if (result.isConfirmed) {
            
             swalWithBootstrapButtons.fire(
               "Cảm ơn bạn đã đặt vé tại Cybersoft",
               "",
               "success"
             );
           } else if (
             /* Read more about handling dismissals below */
             result.dismiss === Swal.DismissReason.cancel
           ) {
             swalWithBootstrapButtons.fire({
               html: 'Mua vé tại Cybersoft đi mà <i class="fa-solid fa-face-sad-cry"></i>',
               imageUrl:
                 "https://media.tenor.com/6YHr_m3OOKQAAAAC/himouto-umaru-chan-crying.gif",
               imageWidth: 400,
               imageHeight: 200,
               imageAlt: "Custom image",
             });
           }
         });
    

  }
  let total = handleTotalPrice();
  return (
    <div>
      {total !== 0 ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={require("./images/bill.png")}
              className="w-[5rem] lg:w-[10rem]"
              alt=""
            />
            <h3 className="text-[2rem] md:text-[3rem]">
              {convert.format(total)}
            </h3>
          </div>
          <button className="rounded-[3rem] bg-[#0368FE] py-2 px-[2rem] text-white font-semibold md:py-5 md:px-[3rem] " onClick={()=>handlePaid()}>
            Tiếp tục
          </button>
        </div>
      ) : (
        <div>
          <img src={require("./images/crying.png")} alt="crying" />
          <p className="text-center">Bạn chưa chọn ghế</p>
        </div>
      )}
    </div>
  );
};

export default TotalPrice;