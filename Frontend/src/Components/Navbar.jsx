import React from "react";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
const Navbar = () => {
  return (
    <div className=" justify-between pl-5 pr-8 h-12 items-center w-full flex pt-4 font-poppins">
      <div className="flex gap-2 justify-center items-center">
        <div className="text-white  font-semibold text-2xl">CodeLoom</div>
        <DynamicFormIcon fontSize="large" className="text-primary " />
      </div>
      <div className="flex  p-1 w-[20%] gap-2 justify-around tracking-wide">
        <button className="relative overflow-hidden group bg-primary pt-1 pb-1 pl-2 pr-2 rounded-sm w-[48%] cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-105">
          <span className="relative z-10 flex items-center justify-center">
            Portfolio <InsertLinkIcon fontSize="small" className="ml-1" />
          </span>
          <span className="absolute -top-1/2 left-1/2 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></span>
        </button>

        <button className="relative overflow-hidden group bg-primary pt-1 pb-1 pl-2 pr-2 w-[48%] rounded-sm cursor-pointer text-white transition-all duration-300 ease-in-out hover:scale-105">
          <span className="relative z-10 flex items-center justify-center">
            Github <GitHubIcon fontSize="small" className="ml-1" />
          </span>
          <span className="absolute -top-1/2 left-1/2 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
