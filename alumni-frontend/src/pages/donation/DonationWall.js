import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import donation from "../../assets/donation.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import blue from "@material-ui/core/colors/blue";
import InfoIcon from "@mui/icons-material/Info";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DonationWall() {
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
              src={donation}
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              Donation Wall
            </div>
          </div>

          <div className="mt-[100px] py-[20px] px-[100px] font-opensans">
            <h1 className="text-center text-[50px] overline mb-[80px]">
              Donor Wall Description
            </h1>
            <div>
              <div className="flex flex-row items-center justify-center">
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "42%",
                    height: "3px",
                    marginLeft: "0px",
                  }}
                ></div>
                <div className="p-[10px] w-[180px] flex flex-row justify-center items-center font-opensans">
                  <AcUnitIcon
                    style={{ color: "blue", transform: "scale(1.5)" }}
                  />
                  <p className="font-bold ml-[10px] text-[19px] mt-[10px]">
                    Platinum Wall
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "40%",
                    height: "3px",
                  }}
                ></div>
              </div>
              <br />
              <div>
                <h3 className="font-opensans text-center">
                  This wall recognizes those alumni who have made a cumulative
                  contribution equal or above of Rs 30,000/- to our annual
                  giving campaigns.
                </h3>
              </div>

              <div className="flex flex-row items-center justify-center">
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "42%",
                    height: "3px",
                    marginLeft: "0px",
                  }}
                ></div>
                <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
                  <FavoriteIcon
                    style={{ color: "blue", transform: "scale(1.5)" }}
                  />
                  <p className="font-bold ml-[10px] text-[19px] mt-[10px]">
                    Gold Wall
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "40%",
                    height: "3px",
                  }}
                ></div>
              </div>
              <br />
              <div>
                <h3 className="font-opensans text-center">
                  This wall recognizes those alumni who have made a cumulative
                  contribution equal or above of Rs 20,000/- to our annual
                  giving campaigns.
                </h3>
              </div>

              <div className="flex flex-row items-center justify-center">
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "42%",
                    height: "3px",
                    marginLeft: "0px",
                  }}
                ></div>
                <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
                  <StarIcon
                    style={{ color: "blue", transform: "scale(1.5)" }}
                  />
                  <p className="font-bold ml-[10px] text-[19px] mt-[10px]">
                    Sliver Wall
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "40%",
                    height: "3px",
                  }}
                ></div>
              </div>
              <br />
              <div>
                <h3 className="font-opensans text-center">
                  This wall recognizes those alumni who have made a cumulative
                  contribution equal or above of Rs 5,000/- to our annual giving
                  campaigns.
                </h3>
              </div>

              <div className="flex flex-row items-center justify-center">
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "42%",
                    height: "3px",
                    marginLeft: "0px",
                  }}
                ></div>
                <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
                  <WorkspacePremiumIcon
                    style={{ color: "blue", transform: "scale(1.5)" }}
                  />
                  <p className="font-bold ml-[10px] text-[19px] mt-[10px]">
                    Bronze Wall
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#8BC13D",
                    width: "40%",
                    height: "3px",
                  }}
                ></div>
              </div>
              <br />
              <div>
                <h3 className="font-opensans text-center">
                  This wall recognizes those alumni who have made a cumulative
                  contribution equal or above of Rs 1,000/- to our annual giving
                  campaigns.
                </h3>
              </div>
              <br />
              <br />

              <div
                style={{ backgroundColor: "#C7F1EA", padding: "30px" }}
                className="flex flex-row justify-center items-center"
              >
                <InfoIcon style={{ color: "blue", transform: "scale(1.5)" }} />
                <pre> </pre>
                <h4>
                  Donor names contributing >= Rs. 1000/- will be displayed on
                  the Alumni Website
                </h4>
              </div>
              <br />
              <br />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
