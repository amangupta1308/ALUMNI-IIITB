import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MsgDirector from "../pages/about/MsgDirector";
import Commitees from "../pages/about/Commitees";
import ContactUs from "../pages/about/ContactUs";
import AlumniProfile from "../pages/alumni/AlumniProfile";
import AlumiDirectory from "../pages/alumni/AlumniDirectory";
import AlumniMeet from "../pages/events/AlumniMeet";
import Mentorship from "../pages/events/Mentorship";
import DonationUtility from "../pages/donation/DonationUtility";
import DonationGateway from "../pages/donation/DonationGateway";
import DonationWall from "../pages/donation/DonationWall";
import AlumniChap from "../pages/alumnichap/AlumniChap";
import Convocation from "../pages/convocation/Convocation";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/message-from-director" element={<MsgDirector />}/>
          <Route exact path="/commitees" element={<Commitees />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/alumni-profile" element={<AlumniProfile />} />
          <Route exact path="/alumni-directory" element={<AlumiDirectory />} />
          <Route exact path="/alumni-meet" element={<AlumniMeet />} />
          <Route exact path="/mentorship" element={<Mentorship />} />
          <Route exact path="/donation-utility" element={<DonationUtility />} />
          <Route exact path="/donation-gateway" element={<DonationGateway />} />
          <Route exact path="/donation-wall" element={<DonationWall />} />
          <Route exact path="/alumni-chapters" element={<AlumniChap />} />
          <Route exact path="/convocation" element={<Convocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
