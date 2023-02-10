import React from "react";
import LoadingSkeleton from "../../components/loading/LoadingSkeleton";

const QLSVLoading = () => {
  return (
    <tr className="text-[1.3rem] bg-slate-900 md:text-[1.8rem] text-white border-b border-gray-600 ">
      <td className="border-r  whitespace-nowrap border-gray-600">
         <div className="flex  h-[80px] items-center justify-center gap-3 p-3">
        <LoadingSkeleton
          height={"30px"}
          width={"100px"}
          darkClass="true"
        ></LoadingSkeleton>

         </div>
      </td>
      <td className="border-r  whitespace-nowrap border-gray-600">
         <div className="flex  h-[80px] items-center justify-center gap-3 p-3">
        <LoadingSkeleton
          height={"30px"}
          width={"100px"}
          darkClass="true"
        ></LoadingSkeleton>

         </div>
      </td>
      <td className="border-r  whitespace-nowrap border-gray-600">
         <div className="flex  h-[80px] items-center justify-center gap-3 p-3">
        <LoadingSkeleton
          height={"30px"}
          width={"100px"}
          darkClass="true"
        ></LoadingSkeleton>

         </div>
      </td>
      <td className="border-r  whitespace-nowrap border-gray-600">
         <div className="flex  h-[80px] items-center justify-center gap-3 p-3">
        <LoadingSkeleton
          height={"30px"}
          width={"100px"}
          darkClass="true"
        ></LoadingSkeleton>

         </div>
      </td>
      
      <td>
        <div className="flex  h-[80px] items-center justify-center gap-3 p-3">
          <LoadingSkeleton
            height={"52px"}
            width={"43px"}
            borderRadius={"7.5px"}
            darkClass="true"
          ></LoadingSkeleton>

          <LoadingSkeleton
            height={"52px"}
            width={"43px"}
            borderRadius={"7.5px"}
            darkClass="true"
          ></LoadingSkeleton>
        </div>
      </td>
    </tr>
  );
};

export default QLSVLoading;
