import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ColorRing } from "react-loader-spinner";
import toast from "react-hot-toast";
import Tittle from "../../components/Tittle/Tittle";
import { ease } from "../../lib/animations";

// ─────────────────────────────────────────────
const formInit = { name: "", email: "", message: "" };

const API_URL = "https://portfolio-server-pink-seven.vercel.app/user/contact";

const STATUS = { idle: "idle", loading: "loading", done: "done" };

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rithickroshan-s",
    icon: <FaLinkedinIn />,
    color: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#0A66C2]",
  },
  {
    label: "GitHub",
    href: "https://github.com/rithick-11",
    icon: <FaGithub />,
    color: "hover:bg-white/10 hover:border-white/30 hover:text-white",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/s.ri_thick",
    icon: <FaInstagram />,
    color: "hover:bg-pink-500/15 hover:border-pink-500/40 hover:text-pink-400",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/rithick__11",
    icon: <FaXTwitter />,
    color: "hover:bg-white/10 hover:border-white/30 hover:text-white",
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope className="text-orange-500" />,
    label: "Email",
    value: "rithickroshan7878@gmail.com",
    href: "mailto:rithickroshan7878@gmail.com",
  },
  {
    icon: <FaLinkedinIn className="text-[#0A66C2]" />,
    label: "LinkedIn",
    value: "rithickroshan-s",
    href: "https://www.linkedin.com/in/rithickroshan-s",
  },
  {
    icon: <FaGithub className="text-white/70" />,
    label: "GitHub",
    value: "rithick-11",
    href: "https://github.com/rithick-11",
  },
];

// ── Styled Input / Textarea ──
const Field = ({ label, id, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-white/40">
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500/60 focus:bg-orange-500/5 outline-none text-sm text-white placeholder:text-white/25 transition-all";

// ─────────────────────────────────────────────
const Contact = () => {
  const [form, setForm]       = useState(formInit);
  const [status, setStatus]   = useState(STATUS.idle);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) { toast.error("Please enter a valid email address."); return; }

    setStatus(STATUS.loading);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const { msg } = await res.json();
      toast.success(msg || "Message sent!");
      setForm(formInit);
      setStatus(STATUS.done);
    } catch {
      toast.error("Failed to send. Please try again.");
      setStatus(STATUS.idle);
    }
  };

  return (
    <section id="contact" className="min-h-screen pb-16 pt-[5.5rem]">
      <Tittle>Get In Touch</Tittle>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease }}
        className="text-white/40 text-sm mt-2 mb-10"
      >
        Have a project in mind or just want to say hi? My inbox is always open.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ══════════════ LEFT: FORM ══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease }}
          className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="flex items-center gap-2 mb-1">
            <FaPaperPlane className="text-orange-500 text-sm" />
            <h3 className="text-sm font-semibold text-white/70">Send a message</h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Field label="Name" id="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Email" id="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === STATUS.loading}
              className="mt-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-semibold transition-colors shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              {status === STATUS.loading ? (
                <>
                  <ColorRing height="18" width="18" colors={["#fff","#fff","#fff","#fff","#fff"]} />
                  Sending…
                </>
              ) : status === STATUS.done ? (
                "✓ Message sent!"
              ) : (
                <>
                  <FaPaperPlane className="text-xs" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* ══════════════ RIGHT: INFO + SOCIAL ══════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
          className="flex flex-col gap-6"
        >
          {/* CTA copy */}
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 p-6">
            <h3 className="text-lg font-bold text-white mb-2">
              Let's build something <span className="text-orange-500">together</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to connect — feel free to
              reach out. I'll get back to you as soon as possible!
            </p>
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col gap-3">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center text-lg transition-colors flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-white/35 font-semibold uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm text-white/75 font-medium truncate group-hover:text-white transition-colors">
                    {info.value}
                  </p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-orange-500 transition-colors text-xs">
                  →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Social icons row */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
              Find me on
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease, delay: i * 0.07 }}
                  className={`h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/55 transition-all ${s.color}`}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
