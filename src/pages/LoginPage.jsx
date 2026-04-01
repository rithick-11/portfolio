import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { FaUser, FaLock, FaEnvelope, FaIdCard, FaArrowLeft } from "react-icons/fa";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import apiServer from "../lib/apiServer";
import useDataStore from "../store/useDataStore";
import { ease } from "../lib/animations";

// ─────────────────────────────────────────────
const FORM_INIT = { username: "", name: "", email: "", password: "" };
const STATUS = { idle: "idle", loading: "loading" };

const inputClass =
  "w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500/60 focus:bg-orange-500/5 outline-none text-sm text-white placeholder:text-white/25 transition-all";

const Field = ({ label, id, icon, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-1.5"
    >
      {icon}
      {label}
    </label>
    {children}
  </div>
);

// ─────────────────────────────────────────────
const LoginPage = () => {
  const navigate = useNavigate();
  const { getProject, getUserData } = useDataStore();

  const [tab, setTab]       = useState("login");   // "login" | "signup"
  const [form, setForm]     = useState(FORM_INIT);
  const [status, setStatus] = useState(STATUS.idle);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const switchTab = (t) => { setTab(t); setForm(FORM_INIT); };

  // ── Sign Up ──
  const handleSignUp = async (e) => {
    e.preventDefault();
    setStatus(STATUS.loading);
    try {
      await apiServer.post("/user/singup", form);
      toast.success("Account created! Please log in.");
      setForm(FORM_INIT);
      setTab("login");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Sign up failed.");
    } finally {
      setStatus(STATUS.idle);
    }
  };

  // ── Login ──
  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus(STATUS.loading);
    try {
      const res = await apiServer.post("/user/login", {
        username: form.username,
        password: form.password,
      });
      Cookies.set("user_token", res.data.token, { expires: 2 });
      toast.success(res.data.msg);
      getProject();
      getUserData();
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed.");
    } finally {
      setStatus(STATUS.idle);
    }
  };

  // ── Dummy Data ──
  const getGuestData = async () => {
    try {
      const { data } = await apiServer.post("/user/add-guest");
      setForm((prev) => ({ ...prev, ...data.guest }));
      toast.success(data.msg);
    } catch {
      toast.error("Cannot connect to server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-x-hidden">
      {/* ── Background ── */}
      <div className="fixed inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Orange glow orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-md">
        {/* ── Back link ── */}
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease }}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors group cursor-pointer"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs" />
          Back to Portfolio
        </motion.button>

        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">
              Rithic<span className="text-orange-500">K</span>
            </h1>
            <p className="text-sm text-white/35">Portfolio access portal</p>
          </div>

          {/* ── Tabs ── */}
          <div className="flex rounded-xl bg-white/5 border border-white/10 p-1 mb-6">
            {[
              { id: "login",  label: "Sign In" },
              { id: "signup", label: "Sign Up" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => switchTab(t.id)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  tab === t.id
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Form ── */}
          <AnimatePresence mode="wait">

            {/* LOGIN FORM */}
            {tab === "login" && (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                onSubmit={handleLogin}
                className="flex flex-col gap-4"
              >
                <Field label="Username" id="l-username" icon={<FaUser className="text-[10px]" />}>
                  <input
                    id="l-username"
                    name="username"
                    type="text"
                    required
                    placeholder="Your username"
                    value={form.username}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>
                <Field label="Password" id="l-password" icon={<FaLock className="text-[10px]" />}>
                  <input
                    id="l-password"
                    name="password"
                    type="password"
                    required
                    placeholder="Your password"
                    value={form.password}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={status === STATUS.loading}
                  className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-semibold transition-colors shadow-lg shadow-orange-500/25 cursor-pointer"
                >
                  {status === STATUS.loading ? (
                    <><ColorRing height="18" width="18" colors={["#fff","#fff","#fff","#fff","#fff"]} /> Signing in…</>
                  ) : "Sign In"}
                </button>
                <p className="text-center text-xs text-white/30 mt-1">
                  No account?{" "}
                  <button type="button" onClick={() => switchTab("signup")} className="text-orange-400 hover:underline cursor-pointer">
                    Create one
                  </button>
                </p>
              </motion.form>
            )}

            {/* SIGNUP FORM */}
            {tab === "signup" && (
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.22 }}
                onSubmit={handleSignUp}
                className="flex flex-col gap-4"
              >
                <p className="text-xs text-orange-400/80 bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2">
                  💡 Click <strong>Auto-fill</strong> to generate dummy data instantly
                </p>
                <Field label="Username" id="su-username" icon={<FaUser className="text-[10px]" />}>
                  <input id="su-username" name="username" type="text" required placeholder="Pick a username" value={form.username} onChange={handleChange} className={inputClass} />
                </Field>
                <Field label="Full Name" id="su-name" icon={<FaIdCard className="text-[10px]" />}>
                  <input id="su-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass} />
                </Field>
                <Field label="Email" id="su-email" icon={<FaEnvelope className="text-[10px]" />}>
                  <input id="su-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputClass} />
                </Field>
                <Field label="Password" id="su-password" icon={<FaLock className="text-[10px]" />}>
                  <input id="su-password" name="password" type="password" required placeholder="Create a password" value={form.password} onChange={handleChange} className={inputClass} />
                </Field>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === STATUS.loading}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-semibold transition-colors shadow-lg shadow-orange-500/25 cursor-pointer"
                  >
                    {status === STATUS.loading ? (
                      <><ColorRing height="18" width="18" colors={["#fff","#fff","#fff","#fff","#fff"]} /> Creating…</>
                    ) : "Create Account"}
                  </button>
                  <button
                    type="button"
                    onClick={getGuestData}
                    className="px-4 py-3 rounded-xl border border-white/10 hover:border-orange-500/40 text-white/50 hover:text-orange-400 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  >
                    Auto-fill
                  </button>
                </div>
                <p className="text-center text-xs text-white/30">
                  Already have an account?{" "}
                  <button type="button" onClick={() => switchTab("login")} className="text-orange-400 hover:underline cursor-pointer">
                    Sign in
                  </button>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-xs text-white/20 mt-5">
          Like a project to support it ❤️
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
