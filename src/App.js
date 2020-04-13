import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderNav from "./components/Navbar.js";

export default function App() {
  const [imgProgramming, setImgProgramming] = useState(
    require("./images/programming.png")
  );
  const [imgContact, setImgContact] = useState(
    require("./images/contact_me.png")
  );

  return (
    <div>
      <HeaderNav />
    </div>
  );
}
