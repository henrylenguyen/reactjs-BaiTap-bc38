import React from "react";
import { useParams } from "react-router-dom";


import Layout from "../../layouts/ChooseGlasses/Layout.js";
import BookingTicketContainer from "../../layouts/MovieSeats/BookingTicketContainer.js";
import StudentsContainer from "../../layouts/QLSV/StudentsContainer.js";
import StudentsContainerAPI from "../../layouts/QLSV_ver2/StudentsContainer.js";
import PageNotFound from "../layout/PageNotFound.js";

const LiveView = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  return (
    <div className="w-full h-full">
      {slug === "shoe-shop" ? (
        <h1 className="text-center text-white text-[50px]">
          Dữ liệu đang được cập nhật
        </h1>
      ) : slug === "choose-glasses" ? (
        <Layout></Layout>
      ) : slug === "movie-seat-selection" ? (
        <BookingTicketContainer></BookingTicketContainer>
      ) : slug === "student-management" ? (
        <StudentsContainer></StudentsContainer>
      ) : slug === "student-management-version-2" ? (
        <StudentsContainerAPI></StudentsContainerAPI>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </div>
  );
};

export default LiveView;
