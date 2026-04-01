import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub, FaGlobe, FaArrowLeft,
  FaRegHeart, FaHeart, FaTag,
} from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { DotLoader } from "react-spinners";

import useDataStore from "../store/useDataStore";
import Navbar from "../components/Navbar/Navbar";
import apiServer from "../lib/apiServer";

const apiStatusConst = {
  initial: "initial",
  loading: "loading",
  success: "success",
  fail: "fail",
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projectList, isProjectLoading } = useDataStore();
  const { projects = [] } = projectList;

  const project = projects.find((p) => p._id === id);
  const related = projects.filter((p) => p._id !== id).slice(0, 3);

  const [likeState, setLikeState] = useState({ status: apiStatusConst.initial });
  const [localProject, setLocalProject] = useState(null);

  // Use `localProject` for live like-count updates, fall back to store data
  const display = localProject || project;

  const handleLike = async () => {
    if (!Cookies.get("user_token")) {
      toast.error("Please log in to like a project");
      return;
    }
    setLikeState({ status: apiStatusConst.loading });
    try {
      apiServer.defaults.headers = {
        Authorization: `Bearer ${Cookies.get("user_token")}`,
      };
      const res = await apiServer.put(`/user/add/like-project/${id}`);
      setLocalProject((prev) => ({
        ...(prev || project),
        likes: res.data.likeCount,
        isLiked: true,
      }));
      setLikeState({ status: apiStatusConst.success });
      toast.success(res.data.msg);
    } catch (err) {
      setLikeState({ status: apiStatusConst.fail });
      toast.error(err?.response?.data?.msg || "Something went wrong");
    }
  };

  // ── Loading state ──
  if (isProjectLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <DotLoader color="#f97316" size={60} />
      </div>
    );
  }

  // ── Not found ──
  if (!display) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-semibold">Project not found</p>
        <Link to="/project" className="text-orange-400 hover:underline text-sm">
          ← Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* ── Background ── */}
      <div className="fixed top-0 right-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="pt-24 pb-20 px-4 sm:px-16 md:px-24 max-w-5xl mx-auto">

        {/* ── Back Nav ── */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/50 hover:text-orange-400 transition-colors text-sm group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <span className="text-white/20">/</span>
          <Link to="/project" className="text-white/50 hover:text-orange-400 transition-colors text-sm">
            All Projects
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-white/70 text-sm truncate max-w-[160px]">{display.name}</span>
        </div>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-10"
        >
          <div className="w-full aspect-video relative">
            <img
              src={display.projectImg}
              alt={display.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Live badge */}
            {display.siteLink && (
              <a
                href={display.siteLink}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center gap-1.5 shadow-lg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: Main Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                {display.name}
              </h1>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {display.techStack?.slice(0, 2).map((t) => (
                  <span key={t} className="text-xs text-orange-400 font-medium">#{t}</span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                About this project
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">{display.desc}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FaTag className="text-orange-500" />
                Tech Stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {display.techStack?.map((tech, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Right: Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* CTA Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white/70">Project Links</h3>

              <a
                href={display.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <FaGithub className="text-base" />
                View Source Code
              </a>

              <a
                href={display.siteLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors text-sm font-medium text-white"
              >
                <FaGlobe className="text-base" />
                Visit Live Site
              </a>

              {/* Like button */}
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="text-xs text-white/40">Liked by the community</span>
                <button
                  onClick={handleLike}
                  disabled={likeState.status === apiStatusConst.loading || display.isLiked}
                  className="flex items-center gap-2 text-red-400 hover:text-red-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {likeState.status === apiStatusConst.loading ? (
                    <ColorRing height="20" width="20" ariaLabel="loading" colors={["#f97316","#f97316","#f97316","#f97316","#f97316"]} />
                  ) : display.isLiked ? (
                    <FaHeart className="text-lg" />
                  ) : (
                    <FaRegHeart className="text-lg" />
                  )}
                  <span className="text-sm font-semibold text-white/80">{display.likes}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Related Projects ── */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-lg font-semibold mb-6">
              <span className="text-orange-500">O</span>ther Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <Link
                  to={`/project/${p._id}`}
                  key={p._id}
                  className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-orange-500/40 transition-colors"
                >
                  <div className="w-full aspect-video overflow-hidden">
                    <img
                      src={p.projectImg}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold group-hover:text-orange-400 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-white/50 mt-1 line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
