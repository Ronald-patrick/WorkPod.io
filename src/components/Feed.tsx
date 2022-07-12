import React from "react";

const Feed = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full mt-4 pb-4">
        <h1 className="text-2xl font-bold ml-8">Feed</h1>
      </div>
      <div className="flex flex-col mt-4 ml-8">

        <div className="md:max-w-[1200px] w-screen border-l-4 border-primary bg-white mt-4">
          {/*          Header          */}
          <div className="flex justify-between items-center w-full my-4">
            <div className="flex justify-center items-center">
              <img
                src="https://api.multiavatar.com/2.png"
                className="w-16 h-16 rounded-full mx-4"
                alt="Avatar"
              />
              <h1 className="font-semibold text-lg">Ronald Patrick</h1>
            </div>
            <div className="mx-2 flex flex-col justify-center items-center">
              <h1 className="font-bold">13:02</h1>
              <h2 className="text-sm text-gray-500">13/04/22</h2>
            </div>
          </div>

          <div className="rounded-3xl  w-full m-6 ">
            Product Launch on 30 april 2022
          </div>
        </div>

        <div className="md:max-w-[1200px] w-screen border-l-4 border-primary bg-white mt-4">
          {/*          Header          */}
          <div className="flex justify-between items-center w-full my-4">
            <div className="flex justify-center items-center">
              <img
                src="https://api.multiavatar.com/4.svg"
                className="w-16 h-16 rounded-full mx-4"
                alt="Avatar"
              />
              <h1 className="font-semibold text-lg">Elon Musk</h1>
            </div>
            <div className="mx-2 flex flex-col justify-center items-center">
              <h1 className="font-bold">11:44</h1>
              <h2 className="text-sm text-gray-500">22/11/21</h2>
            </div>
          </div>

          <div className="rounded-3xl  w-full m-6 ">
            Major Issue in Production : <br />
            /getUsers : Returning Null
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
