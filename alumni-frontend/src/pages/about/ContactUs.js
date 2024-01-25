import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

const pathPic = "Images/contact2.png";
const borderField = {
  border: "1px solid black",
  width: "253px",
  height: "40px",
};
export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    pno: "",
    msg: "",
  });
  const [finalDetails, setFinalDetails] = useState({
    name: "",
    email: "",
    pno: "",
    msg: "",
  });
  const submitEvent = (event) => {
    event.preventDefault();
    setFinalDetails({ ...details });
  };
  const inputEvent = (event) => {
    const currname = event.target.name;
    const val = event.target.value;
    setDetails((preVal) => {
      if (currname === "fullname") {
        return {
          name: val,
          email: preVal.email,
          pno: preVal.pno,
          msg: preVal.msg,
        };
      } else if (currname === "emailid") {
        return {
          name: preVal.name,
          email: val,
          pno: preVal.pno,
          msg: preVal.msg,
        };
      } else if (currname === "phoneno") {
        return {
          name: preVal.name,
          email: preVal.email,
          pno: val,
          msg: preVal.msg,
        };
      } else {
        return {
          name: preVal.name,
          email: preVal.email,
          pno: preVal.pno,
          msg: val,
        };
      }
    });
  };
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
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f]">
              Contact Us
            </div>
          </div>
          <br />
          <br />
          <div style={{ backgroundColor: "whitesmoke", padding: "100px" }}>
            <div class="container font-opensans">
              <div class="row">
                <div class="col-sm">
                  <LazyLoadImage
                    src={pathPic}
                    width="450px"
                    style={{ borderRadius: "7%" }}
                    className="box1"
                  />
                </div>
                <div class="col-sm">
                  <div class="bg-img">
                    <form action="/" class="container" onSubmit={submitEvent}>
                      <div>
                        <input
                          type="text"
                          placeholder="  Name"
                          onChange={inputEvent}
                          value={details.name}
                          name="fullname"
                          required
                          style={{ ...borderField, marginRight: "25px" }}
                          className="rounded-lg p-[10px]"
                        />
                        <input
                          type="email"
                          placeholder="  Email"
                          onChange={inputEvent}
                          value={details.email}
                          name="emailid"
                          required
                          style={borderField}
                          className="rounded-lg p-[10px]"
                        />
                      </div>
                      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <input
                          type="text"
                          placeholder="  Phone Number"
                          onChange={inputEvent}
                          value={details.pno}
                          name="phoneno"
                          required
                          style={{
                            border: "1px solid black",
                            width: "533px",
                            height: "40px",
                          }}
                          className="rounded-lg p-[10px]"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="  Message"
                          rows="6"
                          cols="67"
                          onChange={inputEvent}
                          value={details.msg}
                          name="message"
                          style={{ border: "1px solid black" }}
                          className="rounded-lg p-[10px]"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{ marginTop: "8px", width: "150px" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
