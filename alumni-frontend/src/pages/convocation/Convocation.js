import React from "react";
import Navbar from "../../components/Navbar";
import ConvoCarousel from "../../components/ConvoCarousel";
import Footer from "../../components/Footer";
import Souvenir from "../../assets/Souvenir.pdf";

export default function Convocation() {
  return (
    <div>
      <Navbar />
      <ConvoCarousel />
      <div className="flex gap-[10px] justify-center text-[Poppins] text-[26px] items-center m-[20px]">
        <span>Download the PDF from the link</span>
        <a
          href={Souvenir}
          download="Souvenir.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button>Souvenir.pdf</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
