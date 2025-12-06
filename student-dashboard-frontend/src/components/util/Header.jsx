import React from 'react';
import {FaSearch, FaBell} from 'react-icons/fa';


const Header = ()=> {
  return (
           <div className="flex mb-[10px] border-2">
          <div className="p-[10px] flex items-center ">
            <form action="post" className="flex gap-[10px]">
              <button>
                <FaSearch size={20} color="black" />
              </button>
              <input
                type="search"
                name="search"
                placeholder="Search your course..."
                className="outline-none focus:outline-none focus:ring-0 font-bold "
              />
            </form>
          </div>
          <div className=" flex items-center gap-[10px] ">
            <button className="w-[30px] h-[30px] ml-2 sm:w-[50px] sm:h-[50px] rounded-[50%] bg-gradient-to-r from-[#9B59F0] to-[#BE77D5] p-[1.2px] flex justify-center items-center ">
              <span className="w-[100%] h-[100%] rounded-[50%] flex justify-center items-center bg-white ">
                <FaBell size={24} color="black" />
              </span>
            </button>
            <div className="hidden sm:block h-[80%] w-[1.5px] bg-gradient-to-r from-[#9B59F0] to-[#BE77D5]  "></div>
            <div className=" hidden sm:flex justify-center items-center gap-[10px] ">
              <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-[50%] bg-[#FFDBAA] ">
                <img src="" alt="" />
              </div>
              <p className=" hidden bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-[18px] sm:block ">
                Abel Wisdom
              </p>
            </div>
          </div>
        </div>
  );
}

export default Header;
