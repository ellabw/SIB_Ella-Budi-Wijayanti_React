import React from 'react';
import { FaGit, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { SiVisualstudiocode, SiTailwindcss, SiBootstrap } from 'react-icons/si';

function Skill() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-24 md:mb-8">
        <h1
          className=" relative text-white font-bold text-nama leading-snug ml-5 xl:ml-0 duration-300 ease-linear
                            before:duration-300 
                            before:ease-linear
                            before:content-['Skill'] 
                            before:absolute 
                            before:text-7xl
                            md:before:text-8xl 
                            before:-z-10
                            before:-left-8
                            before:top-2/4
                            before:-translate-y-2/4
                            before:text-gray-400
                            before:opacity-10"
        >
          My Skill
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <IoLogoCss3 />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <IoLogoHtml5 />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <IoLogoJavascript />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <FaPhp />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <SiBootstrap />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <FaReact />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <FaGit />
          </div>
          <div className=" mx-auto flex justify-center items-center w-[190px] h-[130px] bg-nb bg-opacity-20 border-solid border text-7xl text-white border-white rounded-md scale-95 hover:scale-100 duration-200 ease-linear">
            <SiVisualstudiocode />
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default Skill;
