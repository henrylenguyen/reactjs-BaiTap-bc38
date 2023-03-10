import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteSinhVien, EditSinhVien, getSV } from '../../components/Projects/QLSV_Version2/QLSV_Version2_Slice';
import QLSVLoading from './QLSVLoading';

const RenderListSV = () => {
  const { listSV, loading, setSearchSV } = useSelector(
    (state) => state.QLSV_API
    );
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSV());
    return () => {};
  }, [dispatch]);
  // ---------------------------CHỈNH SỬA SINH VIÊN-------------------------
  const handleEdit = (value) => {
    dispatch(EditSinhVien(value));
  };
  // ---------------------------XÓA SINH VIÊN------------------------------------
  const handleDelete = (id) => {
    dispatch(DeleteSinhVien(id));
  };


  return loading ? (
    <>
      <QLSVLoading />
      <QLSVLoading />
      <QLSVLoading />
    </>
  ) : setSearchSV.length>0 ? (
    // eslint-disable-next-line array-callback-return
    setSearchSV.map((sv, index) => {
      if (sv !== "") {
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
                  onClick={() => handleEdit(sv)}
                >
                  <i className="fa-solid fa-wrench"></i>
                </button>
                <button
                  className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
                  onClick={() => handleDelete(sv.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        );
      }
    })
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
                onClick={() => handleEdit(sv)}
              >
                <i className="fa-solid fa-wrench"></i>
              </button>
              <button
                className="bg-red-400 p-3 text-[1rem]  rounded-xl md:text-[1.8rem] md:p-5 "
                onClick={() => handleDelete(sv.id)}
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