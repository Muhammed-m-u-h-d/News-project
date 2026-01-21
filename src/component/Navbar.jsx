import React from "react";
import { CiSearch } from "react-icons/ci";
function Navbar({ inputValue, setvalue, getdata }) {
  return (
    <div className="bg-neutral-900 p-2 fixed  top-0 w-full md:flex md:justify-between md:items-center md:p2">
      <div className="flex justify-between p-2 pb-4">
        <h1 className="italic text-3xl text-blue-500/40 font-bold">Newsly</h1>
        <button className="border border-neutral-500 rounded-xl w-25 text-lg bg-neutral-700/50 text-white md:hidden">
          Sign in
        </button>
      </div>

      <div className="flex items-center">
        <CiSearch size={25} className="text-white relative left-3" />
        <form action="submit" >
        <input
          type="text"
          placeholder="Search latest news"
          value={inputValue}
          onChange={(e) => setvalue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              getdata();
            }
          }}
          className="border text-white p-2 pl-12 w-full ml-[-1.5rem] rounded-full outline-none md:w-[30rem] "
        />
        </form>
      </div>
      <button className="text-sm border border-neutral-500 bg-neutral-700/50 w-20 flex justify-center items-center h-10 text-white rounded-xl md:block hidden">
        Sign in
      </button>
    </div>
  );
}

export default Navbar;
