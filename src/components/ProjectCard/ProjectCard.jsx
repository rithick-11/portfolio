import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { FaRegHeart, FaHeart, FaGithub, FaGlobe } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

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
  const { data } = props;

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
    <motion.div
      className="flex flex-col w-full h-full"
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col h-full rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30">
        {/* Project Image */}
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={data.projectImg}
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          {/* Title */}
          <h2 className="text-base font-semibold leading-tight">{data.name}</h2>

          {/* Description */}
          <p className="text-xs text-white/70 font-light line-clamp-3 flex-shrink-0">
            {data.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex-1">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Tech Stack</p>
            <ul className="flex flex-wrap gap-1.5">
              {data.techStack.map((tech, i) => (
                <li
                  key={i}
                  className="bg-orange-500/10 border border-orange-500/25 text-orange-300/90 px-2.5 py-1 rounded-full text-[11px] font-medium leading-none whitespace-nowrap"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-auto">
            <div className="flex items-center gap-4">
              <a
                href={data?.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs"
              >
                <FaGithub className="text-base" />
                <span>Code</span>
              </a>
              <a
                href={data?.siteLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-orange-400 transition-colors text-xs"
              >
                <FaGlobe className="text-base" />
                <span>Live</span>
              </a>
              <Link
                to={`/project/${data._id}`}
                className="text-xs px-2.5 py-1 rounded-full border border-orange-500/40 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              >
                Details →
              </Link>
            </div>

            {/* Like button */}
            <div className="flex flex-col items-center">
              {likeApiState.status === apiStatusconstan.loading ? (
                <ColorRing
                  visible={true}
                  height="24"
                  width="24"
                  ariaLabel="loading"
                  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
                />
              ) : (
                <button
                  onClick={() => addLikeToProject(data._id)}
                  className="flex flex-col items-center gap-0.5 text-red-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {each.isLiked ? (
                    <FaHeart className="text-lg" />
                  ) : (
                    <FaRegHeart className="text-lg" />
                  )}
                  <span className="text-xs text-white/60">{each.likes}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
