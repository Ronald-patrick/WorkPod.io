import {
  ChatAlt2Icon,
  CloudIcon,
  CogIcon,
  MenuIcon,
  TerminalIcon,
  BellIcon
} from "@heroicons/react/solid";

interface Props {
  isActive : number,
  setisActive : Function
}

const Sidebar = ({isActive,setisActive}:Props) => {
  
  return (
    <div className="w-[250px] bg-primary h-screen flex flex-col">
      <div>
        <div className="font-bold text-lred text-3xl bg-primaryD pb-4 pt-4 font-mono flex-c">
          <CloudIcon className="w-8 h-8 mr-2" /> workpod   <MenuIcon className="text-gray-400 cursor-pointer w-6 h-6 ml-6"/>
        </div>
      </div>

      <div className="flex flex-col pl-5 justify-between h-screen my-6 font-bold">
        <div className="flex flex-col gap-4 text-md">
          <div
            onClick={() => {
              setisActive(1);
            }}
            className={`text-purpleL cursor-pointer flex items-center ${
              isActive === 1 ? "sactive" : ""
            }`}
          >
            <TerminalIcon className="w-6 h-6 mr-2" /> Bugs
          </div>
          <div
            onClick={() => {
              setisActive(2);
            }}
            className={`text-purpleL cursor-pointer flex items-center ${
              isActive === 2 ? "sactive" : ""
            }`}
          >
            <ChatAlt2Icon className="w-6 h-6 mr-2" /> Team Chat
          </div>
          <div
            onClick={() => {
              setisActive(3);
            }}
            className={`text-purpleL cursor-pointer flex items-center ${
              isActive === 3 ? "sactive" : ""
            }`}
          >
            <BellIcon className="w-6 h-6 mr-2" /> Feed
          </div>
        </div>

        <div
          onClick={() => {
            setisActive(4);
          }}
          className={`text-purpleL cursor-pointer flex items-center ${
            isActive === 4 ? "sactive" : ""
          }`}
        >
          <CogIcon className="w-6 h-6 mr-2" /> Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
