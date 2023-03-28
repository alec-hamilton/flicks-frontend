import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
