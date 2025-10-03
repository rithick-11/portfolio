import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { FaRegHeart, FaHeart, FaGithub, FaGlobe } from "react-icons/fa";
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
      // navaigate("/login");
      return
    } else {
      setLikeState((pre) => ({ ...pre, status: apiStatusconstan.loading }));
      try {
        apiServer.defaults.headers = {
          Authorization: `Bearer ${Cookies.get("user_token")}`,
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
        setLikeState({
          status: apiStatusconstan.fail,
          resMsg: err.response.data.msg,
        });
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <motion.li className="flex flex-col h-full mr-4 relative">
        <div className="flex flex-col h-full rounded-lg overflow-hidden border border-white/10">
          <img
            src={data.projectImg}
            alt={data.name}
            className="w-full aspect-16/9 object-cover"
          />
          <div className="flex flex-col flex-grow p-5 space-y-4 bg-[#ffffff] dark:bg-[#1e1e1e]">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <p className="text-sm text-white/90 font-light line-clamp-3">
              {data.desc}
            </p>
            <div className="flex-grow">
              <h1 className="text-sm font-bold">Tech Stack : </h1>
              <ul className="flex flex-wrap">
                {data.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="inline-block bg-white/10 text-white/90 px-2 py-1 rounded-md mr-2 mt-2 text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-auto pt-4">
              <div className="flex justify-between items-center gap-3">
                <a
                  href={data?.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 underline cursor-pointer flex items-center"
                >
                  <FaGithub className="mr-2 text-2xl" />
                  <span className="text-sm">source code</span>
                </a>
                <a
                  href={data?.siteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 underline cursor-pointer flex items-center"
                >
                  <FaGlobe className="mr-2 text-2xl" />
                  <span className="text-sm">Live link</span>
                </a>
              </div>
              <div className="flex flex-col items-center gap-1">
                {likeApiState.status === apiStatusconstan.loading ? (
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                ) : (
                  <button
                    onClick={() => addLikeToProject(data._id)}
                    className="text-2xl text-red-500 flex flex-col items-center cursor-pointer"
                  >
                    {data.isLiked ? (
                      <FaHeart className="animate-like" />
                    ) : (
                      <FaRegHeart />
                    )}
                    <span className="text-xs text-white/90 mt-1">
                      {each.likes}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.li>
    </>
  );
};

export default ProjectCard;
