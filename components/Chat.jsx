"use client";
import Image from "next/image";
import React, { useEffect } from "react";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000");

const Chat = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("chat message", (message) => {
      console.log(message);
      // const messages = document.getElementById("messages");
      // const li = document.createElement("li");
      // li.textContent = message;
      // messages.appendChild(li);
    });

    // Implement event listeners and emit events as needed
  }, []);

  return (
    <div className=" w-2/3 pl-4 p-4 min-h-screen flex flex-col justify-between ">
      <div className=" header flex">
        <div className="avatar w-16">
          <div className="  rounded-full h-12 w-12">
            <Image
              height={36}
              width={36}
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>{" "}
        <div>
          <span>NAME</span>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            That's never been done in the history of the Jedi. It's insulting!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble bg-secondry text-base-300">
            Calm down, Anakin.
          </div>
        </div>
        <div>
          <form className=" relative">
            <button
              type="submit"
              className=" bg-white rounded text-base-200 px-4 py-2 absolute right-2 top-1 "
            >
              <Image src="/send.png" width={24} height={24} />
            </button>
            <input
              placeholder="Gossips lets you Stay in the loop 𖦹"
              className="input text-white input-bordered bg-transparent focus:outline-none border-white border-dashed outline-none w-full mb-1 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
