import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const borderField = {
  border: "1px solid black",
  width: "253px",
  height: "40px",
};

const QueryForm = () => {
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
      <div class="main-bg" style={{backgroundColor:'whitesmoke'}}>
        <hr />
        <h1 className="text-center text-[#2a004f] font-bold font-opensans">
          Get In Touch
        </h1>
        <p className="text-center text-xl font-opensans">
          If you have any query kindly feel free to contact us!
        </p>
        <hr />
        <br />
        <br />
        {/* <h1>Hi {finalDetails.name} {finalDetails.email} {finalDetails.pno} {finalDetails.msg}</h1> */}

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <LazyLoadImage
                src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"
                alt="contact us"
                width="636px"
                className="rounded-lg" style={{boxShadow: '1px 2px #4D4B39'}}/>
            </div>
            <div class="col-sm">
              <div class="bg-img">
                <form action="/" class="container" onSubmit={submitEvent}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={inputEvent}
                      value={details.name}
                      name="fullname"
                      required
                      style={{ ...borderField, marginRight: "25px" }}
                      className="rounded-lg p-[10px] text-lg font-opensans"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={inputEvent}
                      value={details.email}
                      name="emailid"
                      required
                      style={borderField}
                      className="rounded-lg p-[10px] text-lg font-opensans"
                    />
                  </div>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      onChange={inputEvent}
                      value={details.pno}
                      name="phoneno"
                      required
                      style={{
                        border: "1px solid black",
                        width: "533px",
                        height: "40px",
                      }}
                      className="rounded-lg p-[10px] text-lg font-opensans"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows="6"
                      cols="67"
                      onChange={inputEvent}
                      value={details.msg}
                      name="message"
                      style={{ border: "1px solid black" }}
                      className="rounded-lg p-[10px] text-lg font-opensans"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ marginTop: "8px", fontFamily: "Open Sans" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
};

export default QueryForm;
