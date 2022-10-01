import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between py-3 px-6 text-base shadow-slate-800 bg-[#B0C4DE]">
        <div>
          <h1 className="font-bold text-base">NewsAPI</h1>
        </div>
        <div className="flex gap-6 mx-6">
          <Link to="/">Indonesia</Link>
          <Link to="/programming">Programming</Link>
          <Link to="/covid">COVID-19</Link>
          <Link to="/saved">Saved</Link>
        </div>
        <div >
          <div className="">
            <input type="text" placeholder="search here.." className='p-2 bg-gray-200 w-100'/>
            <button className=' bg-[#566FA5] px-5 py-2 text-white'>search</button>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
