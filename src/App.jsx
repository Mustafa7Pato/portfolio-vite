import React from "react";
import SideNav from "./Components/SideNav";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <SideNav />
      <Home />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
