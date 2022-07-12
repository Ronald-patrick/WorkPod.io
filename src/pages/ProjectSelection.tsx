import React from "react";
import { Link } from "react-router-dom";

import { SearchIcon, ViewGridIcon, MenuAlt2Icon,PlusIcon,FolderIcon } from "@heroicons/react/solid";
import MobileView from "../components/MobileView";

const ProjectSelection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-16 hidden md:block">
        <h1 className="font-bold text-2xl">Projects</h1>
        <div className="text-lg text-gray-500 my-4 ">
          Find your personal and shared projects
        </div>

        <div className="flex justify-between items-center">

          <div className="flex gap-3">
            <button className="rounded-full bg-gray-300">
              <SearchIcon className="w-10 h-10 p-2 text-gray-500" />
            </button>
            <button>
              <ViewGridIcon className="w-10 h-10 p-2 text-primary" />
            </button>
            <button>
              <MenuAlt2Icon className="w-10 h-10 p-2 text-gray-500" />
            </button>

            {/* Dropdown */}

          </div>

            <Link to="/projects" className="bg-primary px-6 py-2 rounded-md text-white shadow-md cursor-pointer text-xl flex gap-3 items-center">
                Create <PlusIcon className="w-5 h-5"/>
            </Link>
        </div>

        <div className="flex justify-start items-center font-main gap-5 mt-20">

          <Link to="/projects/fakfc2">
          <div className="w-[250px] h-[200px] border-2 border-gray-200 rounded-xl flex flex-col justify-between p-2 bg-blue-50 cursor-pointer hover:shadow-xl">
              <FolderIcon className="w-16 h-16 text-blue-600" />
              <div className="font-bold text-xl text-gray-600">
                WorkPod App
                <div className="font-bold text-lg text-gray-400">
                Modified 23/06/2022
              </div>
              </div>
            </div>
          </Link>


            <div className="w-[250px] h-[200px] border-2 border-gray-200 rounded-xl flex flex-col justify-between p-2 bg-pink-50 cursor-pointer hover:shadow-xl">
              <FolderIcon className="w-16 h-16 text-pink-600" />
              <div className="font-bold text-xl text-gray-600">
                DashNode
                <div className="font-bold text-lg text-gray-400">
                Modified 23/06/2022
              </div>
              </div>
            </div>

            <div className="w-[250px] h-[200px] border-2 border-gray-200 rounded-xl flex flex-col justify-between p-2 bg-violet-50 cursor-pointer hover:shadow-xl">
              <FolderIcon className="w-16 h-16 text-violet-600" />
              <div className="font-bold text-xl text-gray-600">
                Porfolio
                <div className="font-bold text-lg text-gray-400">
                Modified 23/06/2022
              </div>
              </div>
            </div>
        </div>
      </div>

      <MobileView/>
    </>
  );
};

export default ProjectSelection;

