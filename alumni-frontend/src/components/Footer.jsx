import React from "react";
import IIITLogo from "../assets/iiitb.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Footer() {
  return (
    <div className="flex flex-col bg-[#181616] w-[full] gap-[10px] py-[15px]">
      <div className="flex flex-row bg-[url(https://alumni.iiita.ac.in/wp-content/themes/xzopro/xzopro/assets/images/footer-bg.png)] justify-evenly gap-[15px] items-start">
        <div className="flex flex-col m-[5px] gap-[10px] justify-start items-center">
          <LazyLoadImage
            src={IIITLogo}
            width={150}
            height={150}
            alt="IIIT Bhopal Logo"
          />
          <span className="flex flex-col gap-[2px] text-[16px] text-white font-opensans">
            Follow Us
            <span className="flex flex-row gap-[5px] text-[16px] justify-center items-center ">
              <Link to="#" className="text-white">
                <FaFacebookSquare />
              </Link>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-[10px] m-[5px] font-opensans justify-center text-[13px] items-start text-white">
          <h1 className="font-bold text-[22px] font-opensans">Useful Links</h1>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7] text-white flex flex-row justify-center items-center "
          >
            <AiOutlineRight />
            <span>IIIT Bhopal Website</span>
          </Link>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7] text-white flex flex-row justify-center items-center"
          >
            <AiOutlineRight />
            <span>Dept. of CSE</span>
          </Link>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7] text-white flex flex-row justify-center items-center"
          >
            <AiOutlineRight />
            <span>Dept. of IT</span>
          </Link>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7] text-white flex flex-row justify-center items-center"
          >
            <AiOutlineRight />
            <span>Dept. of ECE</span>
          </Link>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7] text-white flex flex-row justify-center items-center"
          >
            <AiOutlineRight />
            <span>AAA Section</span>
          </Link>
          <Link
            to="https://iiitbhopal.ac.in"
            className="hover:text-[#0a6db7]  text-white flex flex-row justify-center items-center"
          >
            <AiOutlineRight />
            <span>Library</span>
          </Link>
        </div>
        <div className="flex flex-col gap-[10px] m-[5px] font-opensans justify-center items-start text-white">
          <h1 className="text-[22px] font-bold font-opensans">Recent News</h1>
          <Link
            to="#"
            className="hover:text-[#0a6db7] gap-[5px] flex text-white flex-row justify-center items-start"
          >
            <LazyLoadImage
              src="https://alumni.iiita.ac.in/wp-content/uploads/2022/06/Congrattulation-Students-who-got-successed-1.png"
              width={100}
              height={100}
              alt="img-1"
            />
            <span className="text-[12px] w-[150px]">
              23 Students of IIIT Bhopal received 46 LPA package Amazon.
            </span>
          </Link>
          <Link
            to="#"
            className="hover:text-[#0a6db7] gap-[5px] text-white flex flex-row justify-center items-start"
          >
            <LazyLoadImage
              src="https://alumni.iiita.ac.in/wp-content/uploads/2022/06/Congrattulation-Students-who-got-successed-1.png"
              width={100}
              height={100}
              alt="img-1"
            />
            <span className="text-[12px] w-[150px] ">
              23 Students of IIIT Bhopal received 46 LPA package Amazon.
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-[5px] font-opensans justify-center items-start text-white">
          <h1 className="text-[22px] font-bold font-opensans">
            Contact Information
          </h1>
          <span className="flex flex-row gap-[15px] justify-start items-start">
            <ImLocation className="text-[15px] text-[#0a6db7]" />
            <span className="flex flex-col w-[90%]">
              <h1 className="text-[13px] font-bold ">IIIT Bhopal</h1>
              <h1 className="text-[12px] text-white w-[200px] ">
                C/O Maulana Azad National Institute of Technology (MANIT),
                Bhopal Room No TC-105, New Teaching Block, MANIT, Bhopal, MP,
                India
              </h1>
              <h1 className="text-[14px] text-white">Pin code : 462003</h1>
              <h1 className="text-[14px] text-white">Phone : 0755-4051950</h1>
              <h1 className="text-[14px] text-white">
                Email: info@iiitbhopal.ac.in
              </h1>
            </span>
          </span>
          <span className="flex flex-row gap-[12px] justify-start items-start">
            <MdMail className="text-[15px] text-[#0a6db7]" />
            <span className="flex flex-col text-[13px] w-[90%]">
              alumni.coordinator@iiitbhopal.ac.in
            </span>
          </span>
          <span className="flex flex-row gap-[12px] justify-start items-start">
            <BsTelephoneFill className="text-[15px] text-[#0a6db7]" />
            <span className="flex flex-col text-[13px] w-[90%]">
              0755-4051950
            </span>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center text-white font-opensans">
        © IIIT Bhopal | Designed and Developed by: Mohit Khairnar, Aman Gupta
        and Manjeet Pathak (IIIT Bhopal students)
      </div>
    </div>
  );
}

export default Footer;
