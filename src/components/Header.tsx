import { Link } from "react-router-dom";
import { CloudIcon } from '@heroicons/react/solid'
import { LockOpenIcon,ChevronRightIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
    <header className="flex justify-between max-w-7xl mx-auto py-6 items-center border-b-2 border-gray-200">
      <Link to="/">
        <div className="font-bold text-primary text-3xl font-mono underline w-screen flex-c md:w-full ">
        <CloudIcon className="w-8 h-8 mr-2"/> WorkPod.io
        </div>
      </Link>

      <div className="items-center text-lg space-x-5 mr-4 font-main hidden md:flex">
        <h3 className="bg-primary px-6 py-2 rounded-lg text-white shadow-md cursor-pointer flex-c">
          Login <LockOpenIcon className="w-6 h-6 ml-2"/>
        </h3>
        <h3 className="border text-primary border-primary px-4 py-2 rounded-lg shadow-lg cursor-pointer flex-c">
          Signup <ChevronRightIcon className="w-6 h-6 ml-2" />
        </h3>
      </div>
    </header>
  );
};

export default Header;
