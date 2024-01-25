import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import image from "../assets/iiitb-full.png";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { LazyLoadImage } from "react-lazy-load-image-component";
function Navbar() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#303038] justify-between w-[100%] px-[150px] py-[10px] items-center">
          <div className="flex gap-[4px] text-[28px] text-white justify-center items-center">
            <FaHandshake />
            <span className="text-[20px] font-opensans">
              "Once an alumnus, forever a part of our legacy."
            </span>
          </div>
          <div className="flex flex-row gap-[15px] text-[25px]">
            <Link to="#" className="text-[#eded04]">
              <FaFacebookSquare />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <BsTwitter />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <RiLinkedinFill />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <AiFillInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center w-full">
          <h3 className="font-opensans text-[2.2rem] text-[#2a004f] font-bold w-[30%] pl-[3%]" style={{fontFamily: "'Playfair Display', serif", textShadow: '4px 3px #F1EDC7'}}> Alumni IIIT Bhopal</h3>
          <span className="w-[50%] flex items-center justify-center mr-[4%]">
            <LazyLoadImage src={image} alt="logo-iiitb" width='9000px'/>
          </span>
          <Button variant="contained">LOGIN / SIGNUP</Button>
        </div>
        <div className="flex gap-[10px] text-[17px] font-opensans text-white bg-[#2a004f] justify-evenly items-center z-[10] px-[15px] h-[50px] w-full">
          <Link
            to="/"
            className="hover:border-t-2 hover:no-underline hover:z-[10px] py-[10px] text-white font-semibold no-underline"
          >
            Home
          </Link>
          <div className="relative group m-[5px] font-opensans">
            <Link className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline">
              About Us
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7] text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow py-[5px]">
                <li className="p-[4px]">
                  <Link
                    to="/about"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    About the Institute
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/message-from-director"
                    className="hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Message From Director
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/commitees"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Committees
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/contactus"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group m-[5px]">
            <Link
              to="/"
              className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline"
            >
              Alumni
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7]  text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000] w-[200px] text-white bg-[#2a004f] shadow py-[5px] pl-[17px]">
                <li className="p-[4px]">
                  <Link
                    to="/alumni-profile"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Alumni Profile
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/alumni-directory"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Alumni Directory
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group m-[5px]">
            <Link
              to="/"
              className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline"
            >
              Events
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7]  text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow py-[5px]">
                <li className="p-[4px]">
                  <Link
                    to="/alumni-meet"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Alumni Meet
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/mentorship"
                    className=" hover:z-[10px] text-white no-underline text-[19px]"
                  >
                    <div className="flex gap-[13px]">
                      Mentorship Programs
                      <span className="flex px-[3px] py-[2px] text-[16px] animate-bounce bg-[#e03574] rounded-md">
                        New
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group ">
            <Link
              to="/"
              className="hover:border-t-2 text-white hover:z-[10px] py-[10px] font-semibold no-underline hover:no-underline"
            >
              Donation/Give Back
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7] text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow py-[5px]">
                <li className="p-[4px]">
                  <Link
                    to="/donation-utility"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Donation Utilization
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/donation-gateway"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Donate Now
                  </Link>
                </li>
                <li className="p-[4px]">
                  <Link
                    to="/donation-wall"
                    className=" hover:z-[10px] text-white py-[10px] no-underline text-[19px]"
                  >
                    Donar Wall Recognization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/alumni-chapters"
            className="hover:border-t-2 hover:no-underline text-white hover:z-[10px] py-[10px] font-semibold no-underline"
          >
            Alumni Chapters
          </Link>
          <Link
            to="/convocation"
            className="flex hover:no-underline text-white items-center hover:border-t-2 py-[10px] justify-center gap-[4px] font-semibold no-underline"
          >
            Convocation
            <span className="flex px-[3px] py-[2px] text-[16px] animate-bounce bg-[#e03574] rounded-md">
              New
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
