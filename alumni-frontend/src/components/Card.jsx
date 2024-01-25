import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const imgUrl =
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg";
// divide-y divide-slate-100
//space-y-4
const Card = () => {
  return (
    <>
      <div className="flex flex-col border-2 border-grey w-[350px] rounded-lg">
        <div className="text-[#0000FF] pt-[30px] text-center">
          <h1 className="text-[26px] font-bold">Aman Gupta (21U02008)</h1>
        </div>
        <div className="text-center p-[20px]">
          <h1 className="text-[#808080] text-[18px] font-bold">
            B.Tech. CSE (2025 batch)
          </h1>
        </div>
        <div className="text-center">
          <h1 className="text-[#55C73E] text-[20px] font-bold">
            Award/Recognition: Lorem ipsum dolor sit amet consectetur, apsum
            dolor sit amet consectetur.
          </h1>
        </div>
        <div className="p-[8px] mt-[8px]">
          <center>
            <LazyLoadImage
              src={imgUrl}
              alt="alumniImg"
              width="280px"
              className="rounded-lg"
            />
          </center>
        </div>
        <div className="text-center text-[#107CAF] font-medium text-[13px]">
          <a href="/">View More</a>
        </div>

        <div className="flex flex-row my-[20px]">
          <div className="ml-[20px]">
            <LazyLoadImage
              src={imgUrl}
              alt="alumniImg"
              width="80px"
              height="15px"
              className="rounded-full"
            />
          </div>
          <div className="p-[6px]">
            <p>
              <span className="text-[22px] font-medium">Aman Gupta</span>
              <br />
              <span className="text-[#778386] mt-[0px] text-[15px]">
                Software Development Engineer
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
