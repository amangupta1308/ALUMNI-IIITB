import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/index.css";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MsgDirector() {
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
              Message From Director
            </div>
          </div>
          <br />
          <br />

          <div class="directorInfo">
            <div class="container" style={{ padding: "70px" }}>
              <div class="row">
                <div class="col-sm" style={{ marginRight: "60px" }}>
                  <h1 className="text-[#107CAF] font-bold font-opensans">
                    Message from the Director
                  </h1>
                  <div
                    style={{
                      marginTop: "30px",
                      lineHeight: "1.8",
                      fontFamily: "Open Sans",
                      fontSize: "1.2rem",
                    }}
                  >
                    <p>
                      Alumni are our ambassadors to effectively portray the
                      image and vision of your great Institute, IIIT Bhopal, MP.
                    </p>
                    <p>
                      Just your expression that ‘I am from IIIT Bhopal’ makes us
                      feel proud and enriches us with a vigour to get that
                      expression echoed, from your juniors of the next batch and
                      the next batch and so on. Now that you are alumni, we are
                      very sure that you will have the concern to know how your
                      alma mater is doing, and we are equally confident that you
                      will stand by us, with us and for us.
                    </p>
                    <p>
                      With the social networking framework, I wish that all of
                      you remain connected amongst yourselves and as well with
                      your alma mater. IIITB remains a part of every one of you,
                      at any time and all the time.
                    </p>
                    <p>With my best wishes,</p>
                    <div style={{ textAlign: "right" }}>
                      <p>
                        Dr. Ashutosh Kumar Singh<br></br>Director<br></br>IIIT
                        Bhopal
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm" style={{ borderRadius: "12%" }}>
                  <LazyLoadImage
                    src="https://iiitbhopal.ac.in/Document/Director/Director1.png?12:51:01.6921757"
                    width="500px"
                    style={{ borderRadius: "10%" }}
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </>
      )}
    </>
  );
}
