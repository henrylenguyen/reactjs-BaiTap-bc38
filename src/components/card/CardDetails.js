import React from "react";
import { useParams } from "react-router-dom";
import LayoutMovieSeats from "../../layouts/MovieSeats/LayoutMovieSeats.js";
import FormStudents from "../../layouts/QLSV/FormStudents.js";
import Layout from "../../layouts/ChooseGlasses/Layout.js";

const CardDetails = () => {
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
        <LayoutMovieSeats></LayoutMovieSeats>
      ) : slug === "student-management" ? (
        <FormStudents></FormStudents>
      ) : slug === "student-management-version-2" ? (
        <FormStudents></FormStudents>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardDetails;
