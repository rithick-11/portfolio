import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import LoginCard from "../LoginCard/LoginCard";
import { ColorRing } from "react-loader-spinner";

const domainUrl = {
  loaclHost: "http://localhost:3010",
  cloud: "https://portfolio-server-9ly0.onrender.com",
};

const apiStatusconstan = {
  initial: "intial",
  loading: "loading",
  success: "success",
  fail: "fail",
  errMsg: "",
};

const likeApiConstans = {
  status: apiStatusconstan.initial,
  resMsg: "",
};

const ProjectCard = (props) => {
  const { each, i, reload } = props;

  const [showLogin, setShowLogin] = useState(false);
  const [likeApiState, setLikeState] = useState(likeApiConstans);

  const addLikeToProject = async (pId) => {
    if (Cookies.get("user_token") === undefined) {
      setShowLogin(true);
    } else {
      setLikeState((pre) => ({ ...pre, status: apiStatusconstan.loading }));
      console.log(pId);
      const addLikeApi = `${domainUrl.cloud}/user//add/like-project/${pId}`;
      const option = {
        method: "PUT",
        headers: {
          Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
        },
      };
      const res = await fetch(addLikeApi, option);
      const data = await res.json();
      if (res.status === 200) {
        setLikeState({ status: apiStatusconstan.success, resMsg: data.msg });
      } else if (
        setLikeState({ status: apiStatusconstan.fail, resMsg: data.msg })
      )
      toast(data.msg);
      reload();
    }
  };

  return (
    <>
      <motion.li
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{ duration: 0.35, delay: i * 0.1 }}
        key={each._id}
        className="w-80 flex flex-col gap-3 p-4 max-h-96 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
      >
        <img
          src={each.projectImg}
          alt={each.name}
          className="h-44 w-72 rounded-md"
        />
        <h1 className="text-md font-semibold">{each.name}</h1>
        <p className="text-sm font-thin">{each.desc.slice(0, 86)}...</p>
        <div className="flex items-center justify-between">
          <a href={each.siteLink} target="_blank" rel="noopener noreferrer">
            <button className="relative my-2 py-1 inline-flex items-center justify-center rounded-md bg-orange-500  px-3 font-medium text-white text-sm transition-colors focus:outline-none ">
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
              Vist
            </button>
          </a>
          <div className="flex gap-2 items-center">
            {likeApiState.status === apiStatusconstan.loading ? (
              <ColorRing
                height="18"
                width="18"
                ariaLabel="color-ring-loading"
                colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
              />
            ) : (
              <span
                onClick={() => {
                  addLikeToProject(each._id);
                }}
                className={`text-xl cursor-pointer ${
                  each.isLiked && "text-orange-500"
                }`}
              >
                {each.isLiked ? <FaHeart /> : <FaRegHeart />}
              </span>
            )}
            <p className="text-sm">{each.likes}</p>
          </div>
        </div>
      </motion.li>
      {showLogin && <LoginCard reload={reload} close={setShowLogin} />}
    </>
  );
};

export default ProjectCard;
