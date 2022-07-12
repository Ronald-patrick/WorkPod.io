import React, { useState } from "react";
import ChatPage from "./ChatPage";

const Chat = () => {
    const [active, setactive] = useState("");
    const handleContact = (id : string)=>{
        setactive(id);
    }
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[350px] h-screen border-r-2 bg-slate-100">
            <h1 className="w-full ml-6 mt-4 font-bold text-2xl">Chats </h1>
          <div className="flex flex-col mt-4">

            {/* Contact Card */}
            <div className={`flex justify-start items-center py-2 border-b-2 w-full cursor-pointer hover:bg-slate-200 hover:text-black ${
              active === "id-saas1" ? "bg-slate-200 border-r-2 border-r-black" : ""
            } `}
            onClick={()=>{handleContact("id-saas1")}}>
              <img
                src="https://api.multiavatar.com/2.png"
                className="w-16 h-16 rounded-full mx-4"
                alt="Avatar"
              />
              <h1 className="font-semibold text-lg">Ronald Patrick</h1>
            </div>

            <div className={`flex justify-start items-center py-2 border-b-2 w-full cursor-pointer hover:bg-slate-200 hover:text-black ${
              active === "id-saas2" ? "bg-slate-200 border-r-2 border-r-black" : ""
            } `}
            onClick={()=>{handleContact("id-saas2")}}>
              <img
                src="https://api.multiavatar.com/5.png"
                className="w-16 h-16 rounded-full mx-4"
                alt="Avatar"
              />
              <h1 className="font-semibold text-lg">Bhavendra Panchal</h1>
            </div>

            <div className={`flex justify-start items-center py-2 border-b-2 w-full cursor-pointer hover:bg-slate-200 hover:text-black" ${
              active === "id-saas3" ? "bg-slate-200 border-r-2 border-r-black" : ""
            } `}
            onClick={()=>{handleContact("id-saas3")}}>
              <img
                src="https://api.multiavatar.com/7.png"
                className="w-16 h-16 rounded-full mx-4"
                alt="Avatar"
              />
              <h1 className="font-semibold text-lg">Meet Parmar</h1>
            </div>

          </div>
        </div>

            {/* Chat page */}
        <div className="flex-1">
            <ChatPage id = {active}/>
        </div>

      </div>
    </>
  );
};

export default Chat;
