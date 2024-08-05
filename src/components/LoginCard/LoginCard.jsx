import React, { useState } from "react";
import Cookies from "js-cookie";
import { MdCancel } from "react-icons/md";

const formDataInit = {
  username: "",
  name: "",
  email: "",
  password: "",
};

const LoginCard = (props) => {
  const { close } = props;

  const [loginForm, setLoginForm] = useState(false);
  const [msg, setMsg] = useState("");
  const [loginFormData, setLoginFormData] = useState(formDataInit);

  const handleLoginForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginFormData((pre) => ({ ...pre, [name]: value }));
  };

  const domainUrl = {
    loaclHost: "http://localhost:3010",
    cloud: "https://portfolio-server-9ly0.onrender.com",
  };

  const toSingUP = async (e) => {
    e.preventDefault();
    const signUpApiUrl = `${domainUrl.cloud}/user/singup`;
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
      setMsg(data.msg);
    } else if (res.status === 401) {
      setMsg(data.msg);
    }
  };

  const toLogin = async (e) => {
    e.preventDefault();

    const loginApi = `${domainUrl.cloud}/user/login`;
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
      setMsg(data.msg);
      close(false);
    } else if (res.status === 404) {
      setMsg(data.msg);
    }
    console.log(loginFormData);
  };

  return (
    <section className="fixed h-screen w-screen top-0 right-0 left-0 bg-black/65 flex items-center justify-center z-30 backdrop-blur-sm">
      <div className="h-[70%] w-[75%] sm:h-[26rem] sm:w-96 sm:px-3 bg-white/10  border-[.5px] border-orange-400 rounded-lg flex flex-col justify-between py-2 px-2">
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
            <button className="bg-orange-500 text-md  py-[2px] font-medium rounded-md self-start mt-4 px-2">
              {loginForm ? "Login" : "Join with us"}
            </button>
          </form>
        ) : (
          <form className="px-6 flex flex-col gap-2" onSubmit={toSingUP}>
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
            <button className="bg-orange-500 text-md  py-[2px] font-medium rounded-md self-start mt-4 px-2">
              Join with me
            </button>
          </form>
        )}
        <div className="px-2 py-3 flex items-center justify-between">
          <p className="text-sm font-thin">{msg}</p>
          <button
            onClick={() => {
              setLoginForm((pre) => !pre);
              setLoginFormData(formDataInit);
              setMsg("");
            }}
          >
            {loginForm ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginCard;
