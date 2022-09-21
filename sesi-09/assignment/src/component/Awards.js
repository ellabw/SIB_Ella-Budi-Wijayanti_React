import React from 'react';
import p from '../img/pelatihanweb.jpg';
import p1 from '../img/award1.jpg';
import p2 from '../img/award2.jpg';
import p3 from '../img/award3.jpg';
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai';

function Awards() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-24 md:mb-0">
        <h1
          className=" relative text-white font-bold text-nama leading-snug ml-5 xl:ml-0 duration-300 ease-linear
                            before:duration-300 
                            before:ease-linear
                            before:content-['Awards'] 
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
          Awards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 mt-16">
          <div
            className="w-full min-w-[285px] max-w-[372px] bg-nb 
                        bg-opacity-20 
                        backdrop-blur 
                        backdrop-filter 
                        py-4 px-[18px] 
                        rounded-md 
                        mx-auto 
                        duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p} className="w-full rounded-md" alt="pelatihanweb" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
              Pelatihan Web DNCC UDINUS
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tech Stack : HTML, CSS3, Java Script, PHP </p>
          </div>
          <div
            className="w-full min-w-[285px] max-w-[372px] bg-nb 
                        bg-opacity-20 
                        backdrop-blur 
                        backdrop-filter 
                        py-4 px-[18px] 
                        rounded-md 
                        mx-auto 
                        duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p1} className="w-full rounded-md" alt="award1" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
            HTML dan CSS Dasar
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tech Stack : HTML/CSS</p>
          </div>
          <div
            className=" relative w-full min-w-[285px] max-w-[372px] bg-nb bg-opacity-20 backdrop-blur backdrop-filter py-4 px-[18px] rounded-md mx-auto duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p2} className="w-full rounded-md" alt="award2" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
            Hasil Maksimal, Usaha Minimal dengan ES6
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tech Stack : Javascript</p>
          </div>
          <div
            className=" relative w-full min-w-[285px] max-w-[372px] bg-nb bg-opacity-20 backdrop-blur backdrop-filter py-4 px-[18px] rounded-md mx-auto duration-300
                        ease-linear
                        hover:-translate-y-5"
          >
            <img src={p3} className="w-full rounded-md" alt="award3" />
            <h2 className="text-center p-4 text-lg text-white font-semibold leading-relaxed">
            Styling Komponen
            </h2>
            <p className=" text-white mb-12 text-xs opacity-60">Tech Stack : Bootstrap, React, Javascript</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Awards;
