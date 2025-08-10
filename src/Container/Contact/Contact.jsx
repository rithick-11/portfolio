import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ColorRing } from "react-loader-spinner";
import toast from "react-hot-toast";

const formDataInit = {
  message: "",
  name: "",
  email: "",
};

const domainUrl = {
  loaclHost: "http://localhost:3010",
  cloud: "https://portfolio-server-9ly0.onrender.com",
  vercel: "https://portfolio-server-pink-seven.vercel.app",
};

const apiStatusconstan = {
  initial: "intial",
  loading: "loading",
  success: "success",
  fail: "fail",
  errMsg: "",
};

const apiStateInit = {
  status: apiStatusconstan.initial,
  errMsg: "",
};

const Contact = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [loginFormData, setLoginFormData] = useState(formDataInit);
  const [apiRes, setApiRes] = useState(apiStateInit);

  const handleLoginForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(loginFormData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setApiRes((prev) => ({ ...prev, status: apiStatusconstan.loading }));
    const apiUrl = `${domainUrl.vercel}/user/contact`;
    const option = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    };
    const res = await fetch(apiUrl, option);
    const { msg } = await res.json();
    setApiRes((prev) => ({
      ...prev,
      status: apiStatusconstan.success,
      errMsg: msg,
    }));
    setLoginFormData(formDataInit);
  };

  return (
    <section id="contact" className="min-h-screen pb-10 pt-[5.5rem]">
      <motion.h1
        whileInView={{ y: [-50, 0] }}
        transition={{ duration: 0.5 }}
        className="text-center animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-2xl font-semibold text-transparent"
      >
        Get In Touch
      </motion.h1>
      <div className="mt-10 flex flex-col gap-10 md:flex-row-reverse md:flex-1 md:shrink-0">
        <div className="flex items-center md:w-1/2 md:flex-col gap-14 justify-center flex-grow-1 flex-shrink-0 ">
          <motion.img
            whileInView={{ x: [30, 0] }}
            transition={{ duration: 0.5 }}
            src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1732556561/file_jzft2d.jpg"
            alt="profile img-3"
            className="h-60 hidden md:block shadow shadow-orange-50 rounded-full"
          />
          <ul className="flex flex-row gap-4  bottom-7 left-0 mx-auto">
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
              whileInView={{ y: [-30, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/rithickroshan-s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </motion.li>
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
              whileInView={{ x: [-30, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.instagram.com/s.ri_thick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </motion.li>
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
              whileInView={{ x: [30, 0] }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://github.com/rithick-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.li>
            {showIcon && (
              <>
                <motion.li
                  className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
                  whileInView={{ x: [-30, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href="https://twitter.com/rithick__11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </a>
                </motion.li>
                <motion.li
                  className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md hover:bg-white/25 hover:border-2"
                  whileInView={{ x: [30, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href="https://www.snapchat.com/add/ri_thick11?share_id=WJ9TQ4uEy10&locale=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSnapchat />
                  </a>
                </motion.li>
              </>
            )}
            <motion.li
              className="h-8 w-8 cursor-pointer border-[1px] border-white rounded-full flex items-center justify-center font-md bg-orange-600 hover:bg-orange-600/60 hover:border-2"
              whileInView={{ y: [30, 0] }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                setShowIcon((pre) => !pre);
              }}
            >
              {showIcon ? (
                <IoIosArrowBack className="text-md" />
              ) : (
                <IoIosArrowForward className="text-md" />
              )}
            </motion.li>
          </ul>
        </div>
        <div className="flex flex-1 md:w-1/2 flex-col flex-grow-1 flex-shrink-0">
          <motion.form
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            onSubmit={handelSubmit}
            className=" bg-white/10  border-[.5px] border-orange-400 rounded-lg px-4 py-7 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                onChange={handleLoginForm}
                type="text"
                name="name"
                placeholder="Enter name"
                required
                value={loginFormData.name}
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                onChange={handleLoginForm}
                type="text"
                name="email"
                placeholder="Enter email"
                required
                value={loginFormData.email}
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                onChange={handleLoginForm}
                type="text"
                name="message"
                placeholder="Enter message"
                required
                value={loginFormData.message}
                rows={5}
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              ></textarea>
            </div>
            <div className="space-x-4">
              <button
                type="submit"
                className="relative my-2 py-1 self-start inline-flex items-center justify-center rounded-md bg-orange-500  px-3 font-medium text-white text-sm transition-colors focus:outline-none "
              >
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                Send
                {apiRes.status === apiStatusconstan.loading && (
                  <ColorRing
                    height="18"
                    width="18"
                    ariaLabel="color-ring-loading"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />
                )}
              </button>
              {/* <a
                href="https://drive.google.com/file/d/1bUFiwwigsM7nRYTIo5cdXP_ZtwYGDXK7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative my-2 py-1 self-start inline-flex items-center justify-center rounded-md border border-orange-500  px-3 font-medium text-white text-sm transition-colors focus:outline-none "
              >
                Resume
              </a> */}
            </div>
            <p
              className={`text-sm font- ${
                apiRes.status === apiStatusconstan.success
                  ? "text-blue-500"
                  : "text-[#FF0000]"
              }`}
            >
              {apiRes.status === apiStatusconstan.fail && "*"}
              {apiRes.errMsg}
            </p>
          </motion.form>
          <div className="flex items-baseline mt-3 justify-center gap-1">
            <p className="text-sm font-extralight">
              If there is any bug, let konw me{" "}
            </p>
            <a
              href="mailto:rithickroshan7878@gmail.com"
              className="text-blue-500 text-xs"
            >
              here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
