import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
