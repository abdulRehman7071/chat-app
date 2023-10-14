import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <div className=" w-2/3 pl-4 min-h-screen flex flex-col justify-between ">
      <div className=" text-white">Header</div>
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
              placeholder="Gossips lets you Stay in the className= 𖦹"
              className="input text-white input-bordered bg-transparent focus:outline-none border-white border-dashed outline-none w-full mb-1 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
