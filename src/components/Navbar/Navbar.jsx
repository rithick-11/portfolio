import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiBars3BottomRight } from "react-icons/hi2";
import Cookies from "js-cookie";
import { IoIosLogOut } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import LoginCard from "../LoginCard/LoginCard";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [toggle, setToggle] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [isLogin, setIsLogin] = useState(
    Cookies.get("user_token") !== undefined
  );
  const [user, setUser] = useState({ name: "user", username: "" });
  const [showLogin, setShowLogin] = useState(false);

  useMotionValueEvent(scrollY, "change", (last) => {
    if (last > scrollY.getPrevious() && last > 200) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  });

  const domainUrl = {
    loaclHost: "http://localhost:3010",
    cloud: "https://portfolio-server-9ly0.onrender.com",
  };

  const getUserData = async () => {
    if (Cookies.get("user_token") !== undefined) {
      const url = `${domainUrl.cloud}/user/data`;
      const option = {
        method: "get",
        headers: {
          Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
        },
      };
      const res = await fetch(url, option);
      const user = await res.json();
      setUser(user);
    }
  };

  const logInSuccess = () => {
    setIsLogin(true)
    getUserData()
  }




  useEffect(() => {
    getUserData();
  }, []);


  const toLogOut = () => {
    Cookies.remove("user_token");
    setIsLogin(false);
  }

  const toLogIn =  () => {
    setShowLogin(true)
  }

  

  const navItems = [
    "home",
    "about",
    "education",
    "skills",
    "project",
    "contact",
  ];
  return (
    <motion.div
      variants={{ visable: { y: 0 }, hide: { y: "-100%" } }}
      animate={navShow ? "visable" : "hide"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-white px-4 py-4 sm:px-16 md:px-24 fixed top-0 right-0 left-0 z-30"
    >
      <nav className="flex items-center gap-4 justify-between px-4 py-2 rounded-full border-[1px] bg-white/5 shadow-md backdrop-blur drop-shadow-md border-white">
        <div className="text-2xl font-medium">
          Rithic<span>K</span>
        </div>
        <div className="hidden md:flex flex-[.75] justify-evenly uppercase ">
          <ul className="flex items-center">
            {navItems.map((items, i) => (
              <l1
                key={items + i}
                className="px-2 py-1 mr-2 text-sm text-white/90"
              >
                <a href={`#${items}`} className="hover:text-orange-500">
                  {items}
                </a>
              </l1>
            ))}
          </ul>
          {isLogin ? (
              <button
                className="px-2 py-1 bg-orange-500 rounded-full text-md font-bolder border-2  hover:scale-105"
                onClick={toLogOut}
              >
                <span className="flex items-center gap-1 justify-center">
                  {user.name.slice(0, 7)} <IoIosLogOut />
                </span>
              </button>
            ) : (
              <button
                className="px-2 py-1 bg-orange-500 rounded-full text-md font-bolder border-2  hover:scale-105"
                // onClick={tohandleLogInOut}
                onClick={toLogIn}
              >
                Login
              </button>
            )}
        </div>
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
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute flex flex-col uppercase top-0 right-5 bg-black/80 px-8 py-10 mt-16 gap-5 text-right border-[1px] border-white backdrop-blur rounded-lg md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((items, i) => (
                <l1
                  key={items + i}
                  className="px-2 py-1 mr-2 text-sm text-white/90"
                >
                  <a
                    href={`#${items}`}
                    className="hover:text-orange-500"
                    onClick={() => {
                      setToggle(false);
                      setNavShow(true);
                    }}
                  >
                    {items}
                  </a>
                </l1>
              ))}
            </ul>
            {isLogin ? (
              <button
                className="px-2 py-1 bg-orange-500 rounded-full text-md font-bolder border-2  hover:scale-105"
                onClick={toLogOut}
              >
                <span className="flex items-center gap-1 justify-center">
                  {user.name.slice(0, 7)} <IoIosLogOut />
                </span>
              </button>
            ) : (
              <button
                className="px-2 py-1 bg-orange-500 rounded-full text-md font-bolder border-2  hover:scale-105"
                // onClick={tohandleLogInOut}
                onClick={toLogIn}
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </nav>
      {showLogin && (
        <LoginCard
          close={() => {
            setShowLogin(false);
          }}
          reload={logInSuccess}
        />
      )}
    </motion.div>
  );
};

export default Navbar;
