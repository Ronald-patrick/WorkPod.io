import React, { useEffect, useState } from "react";
import chatgif from "./chat.gif";
interface Props {
  id: string;
}

interface Chat{
  self : boolean,
  msg : string
}

const ChatPage = ({ id }: Props) => {
    const [chatlist, setChatlist] = useState<Chat[]>([]);

  const addmsg = () => {
    let ele = (document.getElementById("msginput") as HTMLInputElement);

    let msg : string = ele.value;


    if (msg === "") return;

    let newchat = {
        self: true,
        msg,
    }

    setChatlist(
        [...chatlist,newchat]
    );

    console.log(chatlist);
    ele.value = "";
    
  };
  return (
    <>
      {id === "" ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <img className="w-50 h-50" src={chatgif} alt="Chat" />
          <h1 className="text-2xl text-lred font-semibold font-main mt-4">
            Start a conversation
          </h1>
        </div>
      ) : (
        //   <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">
        //   </div>
        <div className="h-full flex flex-col">
          <div className="w-full bg-primary h-16 flex justify-start pl-10 items-center text-xl text-white">
            Ronald Patrick
          </div>

          <div className="overflow-y-scroll w-full h-[85vh] bg-slate-200 flex flex-col">
            {chatlist.map((chat) =>
              chat.self === true ? (
                <div className="chatfrom-cont">
                  <img
                    className="w-10 h-10"
                    src="https://api.multiavatar.com/2.png"
                    alt="avatar"
                  />
                  <div className="chatfrom">{chat.msg}</div>
                </div>
              ) : (
                <div className="chatto-cont">
                  <div className="chatto">{chat.msg}</div>
                  <img
                    className="w-10 h-10"
                    src="https://api.multiavatar.com/4.png"
                    alt="avatar"
                  />
                </div>
              )
            )}

            {/* <div className="chatto-cont">
                <div className="chatto">Hi</div>
                <img className="w-10 h-10" src="https://api.multiavatar.com/2.png" alt="avatar" />
            </div>

            <div className="chatfrom-cont">
            <img className="w-10 h-10" src="https://api.multiavatar.com/2.png" alt="avatar" />
                <div className="chatfrom">Hi</div>
            </div> */}
          </div>
          <div className="h-20 w-full flex-1 bg-primary flex justify-start items-center">
            <input
              id="msginput"
              className="p-2 bg-primary border-2 rounded-full w-full mx-4 text-white"
              placeholder="Type here.."
              type="text"
            />
            <button
              onClick={addmsg}
              className="p-2 bg-lred text-white font-bold w-[150px] mr-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPage;
