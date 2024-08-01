import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = ["home", "about", "skills", "eaducatoin", "project"];
  return (
    <div className="text-white px-4 py-4 sm:px-16 md:px-24 fixed top-0 right-0 left-0">
      <nav className="flex items-center gap-4 justify-between px-4 py-2 rounded-full border-[1px] bg-white/5 shadow-md backdrop-blur drop-shadow-md border-white">
        <div className="text-2xl font-medium">
          Rithic<span>K</span>
        </div>
        <ul className="hidden md:flex flex-[.75] justify-around uppercase ">
          {navItems.map((items, i) => (
            <l1
              key={items + i}
              className="px-2 py-1 mr-2 text-sm text-white/90"
            >
              <a href={`#${items}`} className="hover:text-white">
                {items}
              </a>
            </l1>
          ))}
        </ul>
        {toggle ? (
          <RxCrossCircled
            className="text-2xl font-bold mr-3 md:hidden"
            onClick={() => {
              setToggle(false);
            }}
          />
        ) : (
          <HiBars3BottomRight
            className="text-2xl font-bold mr-3 md:hidden"
            onClick={() => {
              setToggle(true);
            }}
          />
        )}
        {toggle && (
          <ul className="absolute flex flex-col uppercase top-0 right-5 bg-white/5 px-8 py-10 mt-16 gap-5 text-right border-[1px] border-white backdrop-blur rounded-lg md:hidden">
            {navItems.map((items, i) => (
              <l1
                key={items + i}
                className="px-2 py-1 mr-2 text-sm text-white/90"
              >
                <a
                  href={`#${items}`}
                  className="hover:text-white"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  {items}
                </a>
              </l1>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;