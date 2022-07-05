import React from "react";
import { CloudIcon } from '@heroicons/react/solid'

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-primary h-screen">
      <div className="font-bold text-white text-3xl bg-primaryD pb-4 pt-4 font-mono flex-c">
        <CloudIcon className="w-8 h-8 mr-2" /> WorkPod.io
      </div>
    </div>
  );
};

export default Sidebar;
