import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mentorPoster from "../../assets/mentor-poster.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import {
  get_all_profiles,
  get_profiles_by_year,
} from "../../controllers/StudentRoutes";
import Table from "../../components/Table";
import { AiTwotoneMobile } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AlumniDirectory() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="h-screen flex items-center justify-center">
            <ThreeCircles
              height="200"
              width="200"
              color="#2a004f"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="msgDirectorBanner">
            <LazyLoadImage
              src={mentorPoster}
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div className="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              Alumni Directory
            </div>
          </div><br/><br/>

          <Table />

          <Footer />
        </>
      )}
    </>
  );
}
