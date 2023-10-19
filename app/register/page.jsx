"use client";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { baseURL } from "../../utils/constsnts";
import Image from "next/image";

const Register = () => {
  return <RegisterForm />;
};

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showToken, setShowToken] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  // const { setLoggedInUser, setId, id, loggedInUser } = useContext(UserContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassWord = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowToken(false);
      setUserName("");
      setPassword("");
    }, 2000);
  }, [loginMessage, loginError]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (userName.value === "") {
        return;
      }

      if (password.value === "") {
        return;
      }
      const { data } = await axios.post(`${baseURL}/user/register`, {
        userName,
        password,
      });
      if (data && data.message) {
        // setLoggedInUser(data.userName);
        // setId(data.token);
        setShowToken(true);
        setLoginMessage(data.message);
        // setTimeout(() => {
        //   setShowToken(false);
        // }, 2000);
      } else if (data.validationError) {
        setShowToken(true);
        setLoginError(data.validationError);
        // router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className=" min-h-screen">
      <section className=" flex flex-col justify-center items-center min-h-screen">
        {showToken ? (
          <div className="toast toast-top toast-end">
            <div
              className={`alert alert-success ${loginError && "alert-error"}`}
            >
              <span>{loginError ? loginError : loginMessage}</span>
            </div>
          </div>
        ) : (
          ""
        )}
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
            Register
          </button>
          <div className=" text-xs mt-2 text-center">
            Alreday Registered ?{" "}
            <Link href="/login" className=" text-secondry cursor-pointer">
              Login.
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
