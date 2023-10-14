import Image from "next/image";
import React from "react";

const AllChats = () => {
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
            <h3 className="font-bold font-sans text-sm">Lorem, ipsum dolor.</h3>
            <p className="text-xs opacity-40">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-xs opacity-60 self-end w-1/4 text-end">
            12:04 am
          </div>
        </div>
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
            <h3 className="font-bold font-sans text-sm">Lorem, ipsum dolor.</h3>
            <p className="text-xs opacity-40">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-xs opacity-60 self-end w-1/4 text-end">
            12:04 am
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChats;
