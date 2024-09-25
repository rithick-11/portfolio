import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { MdCancel } from "react-icons/md";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";
import { toast } from "sonner";

import PortfolioContext from "../../Context/PortfolioContext";

const formDataInit = {
  username: "",
  name: "",
  email: "",
  password: "",
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

const LoginCard = (props) => {
  const { close } = props;

  const {getProjectList, getUserData} = useContext(PortfolioContext)

  const [loginForm, setLoginForm] = useState(false);
  const [apiRes, setApiRes] = useState(apiStateInit);
  const [loginFormData, setLoginFormData] = useState(formDataInit);

  const handleLoginForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginFormData((pre) => ({ ...pre, [name]: value }));
  };

  const domainUrl = {
    loaclHost: "http://localhost:3010",
    cloud: "https://portfolio-server-9ly0.onrender.com",
    vercel:"https://portfolio-server-pink-seven.vercel.app"
  };

  const toSingUP = async (e) => {
    e.preventDefault();
    setApiRes((prev) => ({ ...prev, status: apiStatusconstan.loading }));
    const signUpApiUrl = `${domainUrl.vercel}/user/singup`;
    const option = {
      method: "POST",
      body: JSON.stringify(loginFormData),
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await fetch(signUpApiUrl, option);
    const data = await res.json();
    console.log(res);
    if (res.status === 200) {
      Cookies.set("user_token", data.token, { expires: 7 });
      setLoginForm(true);
      setApiRes((prev) => ({
        ...prev,
        status: apiStatusconstan.success,
        errMsg: data.msg,
      }));
      toast.success(data.msg)
    } else if (res.status === 401) {
      setApiRes((prev) => ({
        ...prev,
        status: apiStatusconstan.fail,
        errMsg: data.msg,
      }));
      toast.warning(data.msg)
    }
  };

  const toLogin = async (e) => {
    e.preventDefault();
    setApiRes((prev) => ({ ...prev, status: apiStatusconstan.loading }));

    const loginApi = `${domainUrl.vercel}/user/login`;
    const option = {
      method: "POST",
      body: JSON.stringify({
        username: loginFormData.username,
        password: loginFormData.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };

    const res = await fetch(loginApi, option);
    const data = await res.json();
    if (res.status === 200) {
      Cookies.set("user_token", data.token, { expires: 2 });
      setApiRes((prev) => ({
        ...prev,
        status: apiStatusconstan.success,
        errMsg: data.msg,
      }));
      close(false);
      toast.success(data.msg);
      getProjectList()
      getUserData()
    } else if (res.status === 404) {
      setApiRes((prev) => ({
        ...prev,
        status: apiStatusconstan.fail,
        errMsg: data.msg,
      }));
      toast.warning(data.msg);
    }
  };

  const toLoginAsGuest = async () => {
    setApiRes((prev) => ({ ...prev, status: apiStatusconstan.loading }));
    const url = `${domainUrl.vercel}/user/add-guest`;
    const option = {
      method: "POST",
    };
    try {
      const res = await fetch(url, option);
      const data = await res.json();
      toast.success(data.msg);
      setLoginFormData(data.guest);
      setApiRes((prev) => ({ ...prev, status: apiStatusconstan.success }));
    } catch (err) {
      toast.warning("cannot connect to server");
      setApiRes((prev) => ({
        ...prev,
        status: apiStatusconstan.fail,
      }));
    }
  };

  return (
    <motion.section
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      className="fixed h-screen w-screen top-0 right-0 left-0 bg-black/65 flex items-center justify-center z-30 backdrop-blur-sm"
    >
      <div className="min-h-[70%] w-[75%] sm:h-[26rem] sm:w-96 sm:px-3 bg-white/10  border-[.5px] border-orange-400 rounded-lg flex flex-col justify-between py-2 px-2">
        <div className="px-2 py-3 flex items-center justify-between">
          <h1 className="text-xl font-medium">
            {loginForm ? "Login" : "Sign up"}
          </h1>
          <MdCancel
            onClick={() => {
              close(false);
            }}
            className="text-2xl"
          />
        </div>

        {loginForm ? (
          <form className="px-6 flex flex-col gap-2" onSubmit={toLogin}>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm">
                Username *
              </label>
              <input
                id="username"
                onChange={handleLoginForm}
                type="text"
                name="username"
                placeholder="Enter username"
                required
                value={loginFormData.username}
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password *
              </label>
              <input
                id="password"
                onChange={handleLoginForm}
                type="password"
                name="password"
                value={loginFormData.password}
                placeholder="Enter your password"
                required
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <button className="bg-orange-500 text-md flex items-center  py-[2px] font-medium rounded-md self-start mt-4 px-2">
              Login
              {apiRes.status === apiStatusconstan.loading && (
                <ColorRing
                  height="18"
                  width="18"
                  ariaLabel="color-ring-loading"
                  colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                />
              )}
            </button>
          </form>
        ) : (
          <form className="px-6 flex flex-col gap-2" onSubmit={toSingUP}>
            <p className="text-xs text-orange-500 font-medium">
              You can use dummy data for sing up
            </p>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm">
                Username *
              </label>
              <input
                id="username"
                onChange={handleLoginForm}
                type="text"
                name="username"
                value={loginFormData.username}
                placeholder="Enter username"
                required
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor=" " className="text-sm">
                Name *
              </label>
              <input
                id="name"
                onChange={handleLoginForm}
                type="text"
                name="name"
                value={loginFormData.name}
                placeholder="Enter full name"
                required
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email *
              </label>
              <input
                id="email"
                onChange={handleLoginForm}
                type="text"
                name="email"
                value={loginFormData.email}
                placeholder="Enter e-mail"
                required
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password *
              </label>
              <input
                id="password"
                onChange={handleLoginForm}
                type="password"
                name="password"
                value={loginFormData.password}
                placeholder="Create new password"
                required
                className="text-sxl px-[12px] py-[4px] outline-none rounded-md bg-black/50"
              />
            </div>
            <div className="flex gap-2 items-center mt-5">
              <button className="bg-orange-500 text-md flex items-center py-[2px] font-medium rounded-md self-start  px-2">
                Sign Up
                {apiRes.status === apiStatusconstan.loading && (
                  <ColorRing
                    height="18"
                    width="18"
                    ariaLabel="color-ring-loading"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />
                )}
              </button>
              <button type="button" onClick={toLoginAsGuest} className="text-sm text-blue-300 font-medium">
                Get Dummy data
              </button>
            </div>
          </form>
        )}

        <div className="px-2 py-3 flex items-center justify-between">
          <p></p>
          <button
            onClick={() => {
              setLoginForm((pre) => !pre);
              setLoginFormData(formDataInit);
              setApiRes(apiStateInit);
            }}
          >
            {loginForm ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default LoginCard;
