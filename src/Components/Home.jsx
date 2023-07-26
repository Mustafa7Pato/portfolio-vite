import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1615876323743-f08cabf68bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt="background"
        className="w-full h-screen object-cover object-bottom"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Mustafa Pato
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web-Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend",
                2000,
                "Web-Developer",
                2000,
                "Coder",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between max-w-[200px] w-full pt-6">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaFacebook size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaLinkedin size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
