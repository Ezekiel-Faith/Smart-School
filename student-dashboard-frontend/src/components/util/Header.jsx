import React from 'react';

const Header = ()=> {
  return (
           <div className="w-[100%] flex mb-[10px]">
          <div className="w-[70%] p-[10px] flex items-center ">
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
          <div className="w-[35%] flex items-center gap-[10px] ">
            <button className="w-[50px] h-[50px] rounded-[50%] bg-gradient-to-r from-[#9B59F0] to-[#BE77D5] p-[1.2px] flex justify-center items-center ">
              <span className="w-[100%] h-[100%] rounded-[50%] flex justify-center items-center bg-white ">
                <FaBell size={24} color="black" />
              </span>
            </button>
            <div className="h-[80%] w-[1.5px] bg-gradient-to-r from-[#9B59F0] to-[#BE77D5]  "></div>
            <div className="flex justify-center items-center gap-[10px] ">
              <div className="w-[50px] h-[50px] rounded-[50%] bg-[#FFDBAA] ">
                <img src="" alt="" />
              </div>
              <p className=" bg-gradient-to-r from-[#451f78] to-black bg-clip-text text-transparent text-[18px] ">
                Abel Wisdom
              </p>
            </div>
          </div>
        </div>
  );
}

export default Header;
