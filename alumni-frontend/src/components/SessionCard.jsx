import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const imgUrl =
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg";

export default function SessionCard(props) {
  return (
    <>
      <div className="flex flex-col rounded-lg p-3 bg-purple-100 border-2 border-gray-600 font-opensans">
        <div className="text-[#2a004f] pt-[30px] text-center">
          <h1 className="text-[26px] font-bold">{props.name}</h1>
          <h4 className="font-bold">- {props.presenter}</h4>
        </div>
        <div className="p-[8px] mt-[8px]">
          <center>
            <LazyLoadImage
              src={props.img}
              alt="alumniImg"
              className="rounded-lg"
            />
          </center>
        </div>
      </div>
    </>
  );
}
