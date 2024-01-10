"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/utils/constsnts";

import ChatUser from "./ChatUser";

const AllChats = () => {
  const [allChats, setAllChats] = useState([]);
  const [search, setSearch] = useState("");
  const getAllChatList = async () => {
    try {
      //const id = document.cookie.split(";")[1].split("=")[1];
      const { data } = await axios.get(`${baseURL}/user/all`);
      setAllChats(data.user);
      console.log("🚀 ~ file: AllChats.jsx:15 ~ data:", data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllChatList();
  }, []);
  const filteredChats = allChats.filter((user) =>
    user.userName.toLowerCase().includes(search.toLowerCase())
  );
  const searchUser = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    // setAllChats(filteredChats);
    console.log("🚀 ~ file: AllChats.jsx:31 ~ filteredChats:", filteredChats);
  }, [search]);
  return (
    <div className=" w-1/3 h-screen border-r border-dashed border-white px-4  py-4 overflow-scroll">
      <div className="chat-head mx-auto flex justify-between items-center ">
        <h2 className="text-2xl font-bold my-3 bg-gradient-to-r from-primary to-secondry bg-clip-text text-transparent">
          GossipGrid{" "}
        </h2>{" "}
        <div>
          <input
            type="text"
            onChange={searchUser}
            placeholder="Search..."
            className=" outline-none focus:outline-none bg-transparent border border-dashed border-white p-2 rounded text-xs w-48"
          />
        </div>
      </div>
      <div className="chat-body"> {
        
      }
        {filteredChats.map((chat, i) => (
          <ChatUser key={i} user={chat} />
        ))}
      </div>
    </div>
  );
};

export default AllChats;
