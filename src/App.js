import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="text-white min-h-screen px-3 sm:px-6 md:px-28 overflow-x-hidden">
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default App;
