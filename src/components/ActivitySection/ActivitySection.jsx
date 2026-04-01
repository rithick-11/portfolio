import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Tittle from "../Tittle/Tittle";
import { linkedInPosts } from "../../lib/data";
import { ease } from "../../lib/animations";

// ── LinkedIn post card ──
const PostCard = ({ post }) => (
  <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 group">
    {/* Iframe container — fixed height so all cards are equal */}
    <div className="w-full overflow-hidden" style={{ height: 380 }}>
      <iframe
        src={post.src}
        height="380"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title={post.title}
        className="w-full"
        loading="lazy"
      />
    </div>
    {/* Title bar */}
    <div className="flex items-start gap-2 px-3 py-3 border-t border-white/10">
      <FaLinkedin className="text-[#0A66C2] text-lg flex-shrink-0 mt-0.5" />
      <p className="text-xs text-white/70 font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">
        {post.title}
      </p>
    </div>
  </div>
);

// ── Pagination dots ──
const Dots = ({ total, active, onChange }) => (
  <div className="flex justify-center gap-2 mt-5">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onChange(i)}
        className={`rounded-full transition-all ${
          i === active
            ? "w-5 h-2 bg-orange-500"
            : "w-2 h-2 bg-white/25 hover:bg-white/50"
        }`}
      />
    ))}
  </div>
);

const ActivitySection = () => {
  const [page, setPage] = useState(0);

  // Responsive: desktop=3 per page, tablet=2, mobile=1
  // We calculate at render time using a CSS trick — just use the carousel approach
  // but built manually so we control the layout properly
  const MOBILE_PER_PAGE = 1;
  const TABLET_PER_PAGE = 2;
  const DESKTOP_PER_PAGE = 3;

  // We'll show a custom grid slider on desktop, carousel on mobile
  // Simplest reliable approach: three separate <Carousel>-like views using CSS grid columns

  const totalDesktopPages = Math.ceil(linkedInPosts.length / DESKTOP_PER_PAGE);
  const totalTabletPages  = Math.ceil(linkedInPosts.length / TABLET_PER_PAGE);
  const totalMobilePages  = Math.ceil(linkedInPosts.length / MOBILE_PER_PAGE);

  const desktopSlice  = linkedInPosts.slice(page * DESKTOP_PER_PAGE,  page * DESKTOP_PER_PAGE  + DESKTOP_PER_PAGE);
  const tabletSlice   = linkedInPosts.slice(page * TABLET_PER_PAGE,   page * TABLET_PER_PAGE   + TABLET_PER_PAGE);
  const mobileSlice   = linkedInPosts.slice(page * MOBILE_PER_PAGE,   page * MOBILE_PER_PAGE   + MOBILE_PER_PAGE);

  const prev = (total) => setPage((p) => (p - 1 + total) % total);
  const next = (total) => setPage((p) => (p + 1) % total);

  return (
    <section id="linkedin-posts" className="pb-10 pt-[5.5rem]">
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6">
        <Tittle>LinkedIn Posts</Tittle>
        <a
          href="https://www.linkedin.com/in/rithickroshan-s"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-xs text-[#0A66C2] border border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 transition-colors px-3 py-1.5 rounded-full"
        >
          <FaLinkedin className="text-sm" />
          View profile
        </a>
      </div>

      {/* ── DESKTOP: 3 cards ── */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + "desktop"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-3 gap-5"
          >
            {desktopSlice.map((post, i) => (
              <PostCard key={post.src} post={post} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={() => prev(totalDesktopPages)}
            className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors"
          >
            <FaChevronLeft className="text-sm text-white/60" />
          </button>
          <Dots total={totalDesktopPages} active={page % totalDesktopPages} onChange={setPage} />
          <button
            onClick={() => next(totalDesktopPages)}
            className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors"
          >
            <FaChevronRight className="text-sm text-white/60" />
          </button>
        </div>
      </div>

      {/* ── TABLET: 2 cards ── */}
      <div className="hidden sm:block lg:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + "tablet"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-2 gap-4"
          >
            {tabletSlice.map((post) => (
              <PostCard key={post.src} post={post} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-between mt-5">
          <button onClick={() => prev(totalTabletPages)} className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
            <FaChevronLeft className="text-sm text-white/60" />
          </button>
          <Dots total={totalTabletPages} active={page % totalTabletPages} onChange={setPage} />
          <button onClick={() => next(totalTabletPages)} className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
            <FaChevronRight className="text-sm text-white/60" />
          </button>
        </div>
      </div>

      {/* ── MOBILE: 1 card ── */}
      <div className="block sm:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page + "mobile"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.32, ease }}
          >
            <PostCard post={mobileSlice[0]} />
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => prev(totalMobilePages)} className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
            <FaChevronLeft className="text-sm text-white/60" />
          </button>
          <Dots total={totalMobilePages} active={page % totalMobilePages} onChange={setPage} />
          <button onClick={() => next(totalMobilePages)} className="h-9 w-9 rounded-full border border-white/15 hover:border-orange-500/60 hover:bg-orange-500/10 flex items-center justify-center transition-colors">
            <FaChevronRight className="text-sm text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
