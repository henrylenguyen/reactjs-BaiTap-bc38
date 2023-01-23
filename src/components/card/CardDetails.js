import React from "react";
import { useParams } from "react-router-dom";
import LayoutMovieSeats from "../../layouts/MovieSeats/LayoutMovieSeats.js";
import Layout from "../Projects/ChooseGlasses/Layout.js";

const CardDetails = () => {
  const { slug } = useParams();
  console.log("slug", slug);
  return (
    <div>
      {slug === "shoe-shop" ? 
      (
        <h1 className="text-center text-white text-[50px]">
          Dữ liệu đang được cập nhật
        </h1>
      ) : slug === "choose-glasses" ?
      (
        <Layout></Layout>
      ) : 
      (
        slug === "movie-seat-selection"  
      )  ? 
      (
        <LayoutMovieSeats></LayoutMovieSeats>
      ): ""
      }
    </div>
  );
};

export default CardDetails;
