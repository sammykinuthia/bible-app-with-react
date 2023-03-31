import React from "react";
import NavBar from "./NavBar";
import SideBarNav from "./SideBarNav";
import SectionMain from "./SectionMain";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="main">
      <NavBar></NavBar>
      <div className="body">
        <SideBarNav />
        <SectionMain />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
