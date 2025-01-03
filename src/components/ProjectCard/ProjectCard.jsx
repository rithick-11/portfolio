import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

import LoginCard from "../LoginCard/LoginCard";
import apiServer from "../../lib/apiServer";

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
  const { data, i } = props;

  const [showLogin, setShowLogin] = useState(false);
  const [likeApiState, setLikeState] = useState(likeApiConstans);
  const [each, setEach] = useState(data);

  const addLikeToProject = async (pId) => {
    if (Cookies.get("user_token") === undefined) {
      setShowLogin(true);
    } else {
      setLikeState((pre) => ({ ...pre, status: apiStatusconstan.loading }));
      try {
        apiServer.defaults.headers = {
          Authoriaztion: `Bearer ${Cookies.get("user_token")}`,
        };
        const res = await apiServer.put(`/user/add/like-project/${pId}`);
        setLikeState({
          status: apiStatusconstan.success,
          resMsg: res.data.msg,
        });
        setEach((pre) => ({
          ...pre,
          likes: res.data.likeCount,
          isLiked: true,
        }));
        toast.success(res.data.msg);
      } catch (err) {
        console.log(err);
        setLikeState({ status: apiStatusconstan.fail, resMsg: err.response.data.msg });
        toast.success(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <motion.li
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{ duration: 0.35, delay: i * 0.1 }}
        key={each._id}
        className="flex-shrink-0 w-[80%] md:w-[65%] lg:w-[30%] p-3 grid grid-cols-7 gap-2 bg-white/10 backdrop-blur-md border-[.5px] border-orange-400 rounded-2xl shadow-xl shadow-white/10"
      >
        <div className="col-span-7">
          <img
            src={each.projectImg}
            alt={each.name}
            className="rounded-md w-full aspect-[2/1] "
          />
        </div>
        <h1 className="text-md font-semibold col-span-7">{each.name}</h1>
        <p className="text-sm font-thin col-span-7">
          {each.desc.slice(0, 86)}...
        </p>

        <a
          href={each.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2"
        >
          <button className="relative my-2 py-1 inline-flex items-center justify-center rounded-md bg-orange-500  px-3 font-medium text-white text-sm transition-colors focus:outline-none ">
            <div className="absolute -inset-0 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
            Vist
          </button>
        </a>
        <div className="flex gap-2 items-center justify-end col-span-2 col-start-6">
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
      </motion.li>
      {showLogin && <LoginCard close={setShowLogin} />}
    </>
  );
};

export default ProjectCard;
