// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
const btns = [
  { id: 1, title: "Home", lnk: "#main", icon: <AiOutlineHome size={20} /> },
  { id: 2, title: "Work", lnk: "#work", icon: <GrProjects size={20} /> },
  {
    id: 3,
    title: "Projects",
    lnk: "#projects",
    icon: <AiOutlineProject size={20} />,
  },
  { id: 4, title: "Resume", lnk: "#resume", icon: <BsPerson size={20} /> },
  {
    id: 5,
    title: "Contact",
    lnk: "#contact",
    icon: <AiOutlineMail size={20} />,
  },
];
const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-50 md:hidden"
      />
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col items-center justify-center z-20">
          {btns.map((btn) => {
            return (
              <a
                onClick={handleNav}
                key={btn.id}
                href={btn.lnk}
                className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
              >
                {btn.icon}
                <span className="pl-4">{btn.title}</span>
              </a>
            );
          })}
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {btns.map((btn) => {
            return (
              <a
                href={btn.lnk}
                key={btn.id}
                className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-300"
              >
                {btn.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
