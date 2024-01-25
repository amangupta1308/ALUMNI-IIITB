import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import blue from "@material-ui/core/colors/blue";
import InfoIcon from "@mui/icons-material/Info";
import donation from "../../assets/donation.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function DonationUtility() {
  return (
    <div>
      <Navbar />
      <div class="msgDirectorBanner">
        <LazyLoadImage
          src={donation}
          style={{ filter: "blur(3px)", width: "100%" }}
        />
        <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f]">
          Donation Utilization
        </div>
      </div>
      <br />
      <br />

      <div className="p-[100px] font-opensans">
        <div style={{borderBottom: '2px solid grey', borderTop: '2px solid grey', padding: '15px 0 15px 0'}}>
        <h2 className="text-center font-semibold">
          Why IIIT-B needs your support?
        </h2>
        </div><br/>
        <br />
        <div className="text-lg">
          <p>
            From access to higher education, to broader career possibilities, to
            better resources on campus – your gifts are the gateway to making a
            difference in the lives of our students and the communities we live
            in.
          </p>
          <p>
            No matter the size of your gift, every rupee counts because
            collectively, with your classmates, your gift to IIIT Bhopal helps
            change lives directly/indirectly.
          </p>
          <p>
            The Alumni Donations will primarily be part of the “Endowment
            (Corpus) fund” where a part of the collected fund may be spent on a
            designated category/ head/ activity (out of the four categories
            namely A. Infrastructure, B. Students Support, C. Academics D.
            Others)
          </p>
          <p>
            Gifts from you help to buy books, assist students in presenting
            their award-winning papers at conferences, provide scholarships,
            purchase library resources and provide emergency support to
            struggling students. All of these improve the IIITB student
            experience and create opportunity.
          </p>
          <p>
            This is to inform you that any amount of donation made to your alma
            mater individually (taxpayer of India) is eligible for tax benefits
            under section 80G in India. In order to avail the tax deduction
            providing PAN number at the time of payment is mandatory.
          </p>
          <p>
            Sustaining high quality of education and research — with a major
            impact on the society at large — is pivotal in the growth of an
            academic institution. Good groundwork support (buildings, equipment,
            networks, etc,) and high quality human resources (faculty, staff,
            etc.) are critical to a quality institution. IIIT Bhopal Bhopal is a
            unique institution in its structure. We have 7000 approx. alumni of
            the institute in 20 years. This means not just more students, but
            also research across more domains and hence more impact. This
            requires a delicate balance between quality and affordability of
            education which can be achieved largely through philanthropic
            gestures from multiple sources, of which alumni can play a key role.
          </p>
        </div>
      </div>

      <div
        className="py-[20px] px-[100px]"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <h2
          className="text-[#234144] text-center font-bold mb-[60px] font-opensans"
          style={{
            backgroundColor: "#F1F0C5",
            borderRadius: "22px",
            padding: "15px",
          }}
        >
          Where you can donate? (Proposed)
        </h2>
        <div class="container font-opensans">
          <div class="row">
            <div class="col-sm">
              <LazyLoadImage
                src="https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg"
                style={{
                  boxShadow: "10px 10px 3px 2px rgba(0,0.2,0.2, 0.2",
                  borderRadius: "5%",
                }}
                width="80%"
              />
            </div>
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">
                1. Infrastructure
              </h1>
              <h6 className="text-xl">
                Strong infrastructure (classrooms, labs, hostels, sports
                facilities, etc) is the hallmark of any good institution which
                is why it forms an important parameter used in all popular
                rankings of educational institutions. Possible categories under
                infrastructure are :
              </h6>
            </div>
          </div>
        </div>
        <div
          class="container font-opensans"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div class="row">
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">
                2. Student Support
              </h1>
              <h6 className="text-xl">
                This is intended to provide access to meritorious students for
                their education in IIIT-A despite having inadequate financial
                resources. Possible categories under Students Support are:
              </h6>
            </div>
            <div class="col-sm">
              <LazyLoadImage
                src="https://pbs.twimg.com/media/ECmCvGiWwAEY_Ql.jpg"
                style={{
                  boxShadow: "10px 10px 3px 2px rgba(0,0.2,0.2, 0.2",
                  borderRadius: "5%",
                }}
                width="75%"
              />
            </div>
          </div>
        </div>
        <div class="container font-opensans">
          <div class="row">
            <div class="col-sm">
              <LazyLoadImage
                src="https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg"
                style={{
                  boxShadow: "10px 10px 3px 2px rgba(0,0.2,0.2, 0.2",
                  borderRadius: "5%",
                }}
                width="80%"
              />
            </div>
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">
                3. Academics
              </h1>
              <h6 className="text-xl">
                To strengthen the Acammics power of IIITB we create this
                category in donation purpose.Possible categories under Academics
                are:
              </h6>
            </div>
          </div>
        </div>
        <div
          class="container font-opensans"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div class="row">
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">4. Others</h1>
              <h6 className="text-xl">
                The others contains the two major issue which is given below.
              </h6>
            </div>
            <div class="col-sm">
              <LazyLoadImage
                src="https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg"
                style={{
                  boxShadow: "10px 10px 3px 2px rgba(0,0.2,0.2, 0.2",
                  borderRadius: "5%",
                }}
                width="80%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
