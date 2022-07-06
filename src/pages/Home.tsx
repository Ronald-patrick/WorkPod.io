import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

import { ArrowNarrowRightIcon,StarIcon } from '@heroicons/react/solid'

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="flex flex-col justify-center items-center w-full text-center font-main h-[70vh]">
          <div className="font-bold text-[40px] md:text-[60px] ">
            Build products <br /> efficiently with our <br />
            <span className="text-purpleL">Work Pod Environment</span>
          </div>

          <p className="text-2xl text-gray-500 w-full md:w-[550px] my-10">
            A simple, fast and scalable bug tracking system that helps you
            manage bugs easily and deliver great products on time.
          </p>

          <div className="flex gap-5">
            <Link to="/projects" className="bg-[#805683] px-6 py-2 rounded-md text-white shadow-md cursor-pointer text-xl flex gap-3">
                Get Started <ArrowNarrowRightIcon className="w-7 h-7"/>
            </Link>
            <Link to="/github" className="border text-secondary border-secondary px-6 py-2 rounded-lg shadow-lg cursor-pointer text-xl flex gap-3">
                Github <StarIcon className="w-7 h-7"/>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
