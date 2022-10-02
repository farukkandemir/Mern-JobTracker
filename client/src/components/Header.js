import React from "react";
import {FcBinoculars} from "react-icons/fc";

function Header() {
  return (
    <header>
      <div className="flex items-center gap-4">
        <FcBinoculars size="4rem" />
        <p className="text-3xl">
          Job<span className="text-purple-800">M</span>ania
        </p>
      </div>
    </header>
  );
}

export default Header;
