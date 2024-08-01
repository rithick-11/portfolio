import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="relative text-white px-4 py-4 sm:px-16 md:px-24">
          
      </div>
    </>
  );
};

export default App;
