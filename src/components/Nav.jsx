import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-[60px] font-bold bg-stone-50 shadow border-b flex justify-between items-center px-[5%] lg:px-[10%] text-[25px] md:text-[30px] cursor-default">
      <header className="flex items-center gap-[10px]">
        <i className="fa-solid fa-earth-africa text-sky-600"></i>Our World
      </header>
      <Link to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
    </nav>
  );
};

export default Nav;
