"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { baseURL } from "../../utils/constsnts";
import { UserContextProvider, UserContext } from "@/utils/userContext";
import Image from "next/image";
const Login = () => {
  return (
    <UserContextProvider>
      <LoginForm />
    </UserContextProvider>
  );
};

export default Login;

// const Register = () => {
//   return (
//     <UserContextProvider>

//     </UserContextProvider>
//   );
// };

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const { setLoggedInUser, setId, id, loggedInUser } = useContext(UserContext);
  const router = useRouter();

  const handleShowPassWord = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (userName.length < 1 || password.length < 1) {
      return;
    }

    try {
      const { data } = await axios.post(`${baseURL}/user/login`, {
        userName,
        password,
      });
      console.log("🚀 ~ file: page.js:41 ~ data:", data);
      if (data && data.token) {
        setLoggedInUser(data.userName);
        setId(data.token);
        router.push("/");
        document.cookie = `chatApp=${data.token}`;
      } else if (data.validationError) {
        setLoginError(data.validationError);
        setTimeout(() => {
          setLoginError("");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className=" min-h-screen">
      {loginError.length > 0 ? (
        <div className="toast toast-top toast-end">
          <div className={`alert alert-error`}>
            <span>{loginError}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <section className=" flex flex-col justify-center items-center min-h-screen">
        <Image src="/Gossip.svg" width={200} height={200} />
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent">
          GossipGrid{" "}
        </h1>{" "}
        <form action="" className=" w-64">
          <input
            type="text"
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="input text-secondry input-bordered bg-transparent focus:outline-none border-white border-dashed outline-none w-full max-w-xs mb-3 "
          />
          <div className=" flex flex-col justify-end">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input text-secondry input-bordered bg-transparent focus:outline-none border-white border-dashed outline-none w-full max-w-xs mb-1 "
            />
            <button
              onClick={handleShowPassWord}
              className={`text-xs mb-2 w-max ml-auto ${
                password.length > 0
                  ? " opacity-80 cursor-pointer"
                  : " opacity-0 cursor-default"
              }`}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>
          <button
            className="btn bg-primary w-full hover:bg-white text-white hover:text-primary hover:bg-slate-50"
            onClick={handleRegister}
          >
            Login
          </button>
          <div className=" text-xs mt-2 text-center">
            New to GossipGrid ?{" "}
            <Link href="/register" className=" text-secondry cursor-pointer">
              Register
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
