import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSV } from '../../components/Projects/QLSV_Version2/QLSV_Version2_Slice';
import QLSVLoading from './QLSVLoading';

const RenderListSV = () => {
 const { listSV,loading } = useSelector((state) => state.QLSV_API);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSV());
    return () => {};
  }, [dispatch]);
   
  return loading ? (
    <>
      <QLSVLoading />
      <QLSVLoading />
      <QLSVLoading />
    </>
  ) : (
    listSV.map((sv, index) => {
      return (
        <tr
          key={index}
          className="text-[1.3rem] md:text-[1.8rem] text-white border-b border-borderColor bg-[#212F4F]"
        >
          <td className=" p-[1rem] md:p-[2rem] border-r  whitespace-nowrap border-borderColor">
            {sv.mssv}
          </td>
          <td className="p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.fullname}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.phone}
          </td>
          <td className=" p-[1rem] md:p-[2rem] border-r whitespace-nowrap border-borderColor">
            {sv.email}
          </td>
          <td>
            <div className="flex items-center justify-center gap-3 p-3">
              <button
                className="bg-green-400 p-3  rounded-xl text-[1rem] md:text-[1.8rem] md:p-5"
                onClick={() => this.handleEdit(sv)}
              >
                <i className="fa-solid fa-wrench  "></i>
              </button>
              <button
                className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
                onClick={() => this.handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    })
  );
};

export default RenderListSV;