import Card from "../../components/Card";
import QueryForm from "../../components/QueryForm";
import Meetup from "../../components/Meetup";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Navbar from "../../components/Navbar";
import Corousel from "../../components/Corousel";
import Footer from "../../components/Footer";
import MsgDirector from "../about/MsgDirector";
import ContactUs from "../about/ContactUs";
import { ThreeCircles } from "react-loader-spinner";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="h-screen flex items-center justify-center">
            <h2 className="font-opensans font-bold m-3 p-4">
              Welcome to IIIT Bhopal's Alumni Website
            </h2>
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
          <Corousel />
          <div className="p-[100px]">
            <h1 className="text-center text-[#2a004f] font-bold font-opensans">
            Our Recent Alumni (2022)
          </h1><br/>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
          <Meetup /><br/><br/>
          <QueryForm />
          <Footer />
        </>
      )}
    </>
  );
}
