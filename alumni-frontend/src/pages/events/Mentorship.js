import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mentorPoster from "../../assets/mentor-poster.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import SessionCard from "../../components/SessionCard";
import { get_all_programs } from "../../controllers/StudentRoutes";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Mentorship() {
  const [isLoading, setIsLoading] = useState(true);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    get_all_programs().then((data) => {
      console.log(data.Message);
      setPrograms(data.Message);
    });
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
              src={mentorPoster}
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              Mentorship Programs
            </div>
          </div>

          <div className="mentorship-data m-5">
            <h2 className="font-opensans font-bold text-[#2a004f] text-center text-[2.5rem]">
              IIIT Bhopal Alumni - Student Mentorship Programs
            </h2>
            <p className="font-opensans font-semibold text-[1.5rem] m-2">
              Mentorship programs led by alumni of the college offer a unique
              and invaluable opportunity for current students to receive
              guidance from individuals who have walked the same path. Alumni
              mentors bring a wealth of experience and insights specific to the
              college's culture, academic programs, and career paths. By
              participating in these mentorship programs, students can gain
              valuable advice, industry connections, and real-world perspectives
              that can greatly enhance their educational journey and future
              career prospects. The alumni mentors' dedication to giving back to
              their alma mater creates a strong sense of community and fosters a
              lifelong bond between current students and successful graduates.
            </p>
          </div>
          <div className="flex flex-row justify-center">
            {programs
              ? programs.map((program) => (
                  <>
                    <div className="m-3">
                      <SessionCard
                        name={program.program_name}
                        presenter={program.mentor_name}
                        img={program.imgUrl}
                      />
                    </div>
                  </>
                ))
              : "No Mentorship Programs Conducted yet"}
          </div>

          <br />
          <br />
          <br />
          <Footer />
        </>
      )}
    </>
  );
}
