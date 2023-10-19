"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/utils/constsnts";

import ChatUser from "./ChatUser";

const AllChats = () => {
  const [allChats, setAllChats] = useState([]);
  console.log("hi");
  const getAllChatList = async () => {
    try {
      const id = document.cookie.split(";")[1].split("=")[1];
      const { data } = await axios.get(`${baseURL}/chat/${id}`);
      setAllChats(data);
      console.log("🚀 ~ file: AllChats.jsx:15 ~ data:", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllChatList();
  }, []);
  return (
    <div className=" w-1/3 h-full border-r border-dashed border-white px-4 min-h-screen py-4">
      <div className="chat-head mx-auto flex justify-between items-center ">
        <h2 className="text-2xl font-bold my-3 bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent">
          GossipGrid{" "}
        </h2>{" "}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className=" outline-none focus:outline-none bg-transparent border border-dashed border-white p-2 rounded text-xs w-48"
          />
        </div>
      </div>
      <div className="chat-body">
        {allChats.map((chat, i) => (
          <ChatUser key={i} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default AllChats;
