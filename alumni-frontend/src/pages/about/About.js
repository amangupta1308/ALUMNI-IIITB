import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fullimg3 from "../../assets/iiitb-upper3.jpg";
import fullimg4 from "../../assets/iiitb-upper4.jpg";
import fullimg5 from "../../assets/iiitb-upper5.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
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
              src="https://images.shiksha.com/mediadata/images/1550718239phpVMfSEn.jpeg"
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              About The Institute
            </div>
          </div>
          <div className="m-4 p-4 about-us-section flex flex-col justify-center items-center font-opensans">
            <div className="grid justify-center grid-cols-3 gap-3">
              <LazyLoadImage
                className="rounded-lg"
                src={fullimg3}
                width={600}
                height={120}
              />
              <LazyLoadImage
                className="rounded-lg"
                src={fullimg4}
                width={600}
                height={120}
              />
              <LazyLoadImage
                className="rounded-lg"
                src={fullimg5}
                width={600}
                height={120}
              />
            </div>
            <div className="">
              <h3 className="m-10 p-10 text-[1.3rem]" style={{
                      marginTop: "30px",
                      lineHeight: "1.8",
                      fontFamily: "Open Sans",
                      fontSize: "1.2rem",
                    }}>
                <span className="text-[1.3rem] font-semibold">INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHOPAL (IIITB) </span>
                is one of the Indian Institutes of Information Technology (PPP)
                of National Importance in the country, set up with the objective
                of making available facilities for higher education, research
                and training in various fields of Information Technology. To
                address the challenges faced by the Indian IT industry and
                growth of the domestic IT market, the Ministry of Education
                (MoE), Government of India intends to establish twenty Indian
                Institutes of Information Technology (IIIT), on a Not-for-profit
                Public Private Partnership (N-PPP) basis. The partners in
                setting up the IIITs would be the MoE, Governments of the
                respective States where each IIIT will be established, and the
                industry.
                <br></br>
                <br></br>
                On the same line IIIT-Bhopal is newly established Educational Institute
                by the Ministry of Education, Government of India and few
                industry partners as Not-for-profit Public Private Partnership
                (N-PPP) Institution. The industry Partner of IIIT Bhopal is,
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV, Bhopal M.P.).
                The capital cost of IIIT Bhopal to be contributed in the ratio
                of 50:35:15 by the Government of India, Government of Madhya
                Pradesh and third partners respectively. Approximately 50 acres
                Land has been identified at Bhopal for setting up the institute.
                At present, IIIT-Bhopal is operating from its make shift campus
                at Maulana Azad National Institute of Technology (MANIT),
                Bhopal, till the time its new campus is made operational at
                Bhopal, Madhya Pradesh. Governing Council consisting of
                distinguished people from academia, industry and government
                preside over the governance of the Institute.{" "}
              </h3>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
