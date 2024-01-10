import { baseURL } from "@/utils/constsnts";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setReciver } from "@/store/user";

const ChatUser = ({ user }) => {
  const id = document.cookie.split(";")[1].split("=")[1];

  const dispatch = useDispatch();
  const handleClick = (user) => {
    console.log("Reciver", user);
    dispatch(setReciver(user));
  };
  useEffect(() => {
    // fetchChat();
  }, []);

  return (
    <div onClick={() => handleClick(user)}>
      <div className="flex justify-between px-2 py-4 mb-4items-center cursor-pointer hover:bg-primary hover:text-white rounded transition-all ease-in-out delay-50">
        <div className="w-1/4">
          <div className="avatar indicator">
            <span className="indicator-item badge badge-secondary bg-secondry text-base-200 font-xs border-secondry">
              typing…
            </span>
            <div className="h-12 w-12 rounded-lg">
              <Image
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                className="rounded-lg"
                alt="User avatar"
                height={36}
                width={36}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="font-bold font-sans text-sm">
            {user.userName} {user._id === id && "(You)"}
          </h3>
          <p className="text-xs opacity-40">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="text-xs opacity-60 self-end w-1/4 text-end">
          12:04 am
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
