import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import alumnichap from "../../assets/alumni-chap.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AlumniMeet() {
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
          <div class="msgDirectorBanner">
            <LazyLoadImage
              src={alumnichap}
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              Alumni Meet
            </div>
          </div>

          <div className="mentorship-data m-5 p-5">
            <h2 className="font-opensans font-bold text-[#2a004f] text-center text-[2.5rem]">
              Coming Soon.....
            </h2>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
