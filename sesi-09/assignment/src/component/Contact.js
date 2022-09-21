import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Contact() {
  return (
    <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-8 md:mt-10 mt-2 mb-40 md:mb-8">
        <h1
          className="relative font-bold text-nama leading-snug ml-5 xl:ml-0 duration-300 ease-linear text-white
                            before:duration-300 
                            before:ease-linear
                            before:content-['Contact'] 
                            before:absolute 
                            before:text-7xl
                            md:before:text-8xl 
                            before:-z-10
                            before:-left-8
                            before:top-2/4
                            before:-translate-y-2/4
                            before:text-gray-400
                            before:opacity-10
            "
        >
          Contact
        </h1>
        <div className="block md:flex mt-4">
          <div className="w-full md:w-6/12 text-white">
            <div className="flex mt-16 space-x-4 items-center">
              <div className=" h-16 w-16 bg-nb_2 rounded-md flex justify-center items-center">
                <AiOutlinePhone className=" text-4xl" />
              </div>
              <div>
                <h2 className=" text-base font-medium leading-normal text-white opacity-60">Phone</h2>
                <p className=" text-xl font-bold text-white">0895359510411</p>
              </div>
            </div>
            <div className="flex mt-6 space-x-4 items-center">
              <div className=" h-16 w-16 bg-nb_2 rounded-md flex justify-center items-center">
                <AiOutlineMail className=" text-4xl" />
              </div>
              <div>
                <h2 className=" text-base font-medium leading-normal text-white opacity-60">Email</h2>
                <p className=" text-xl font-bold text-white">ellaabw@gmail</p>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-6/12 mt-8 md:mt-0">
            <div className="sm:w-9/12 md:mx-auto">
              <label className="block text-white text-xl opacity-60">Name</label>
              <input
                type="text"
                className="w-full text-white  h-10 bg-nb_2 rounded-md border border-white border-solid p-2"
              ></input>
              <label className="block text-white text-xl opacity-60 mt-4">Email</label>
              <input
                type="email"
                className="w-full text-white  h-10 bg-nb_2 rounded-md border border-white border-solid p-2"
              ></input>
              <label className="block text-white text-xl opacity-60 mt-4">Message</label>
              <textarea
                type="email"
                className="w-full text-white h-40 bg-nb_2 rounded-md border border-white border-solid p-2"
              ></textarea>
              <button
                type="submit"
                className=" shadow-bx font-semibold float-right inline-block bg-prl px-3 py-2 border border-transparent rounded text-bl my-4 md:my-8 hover:bg-transparent hover:border-prl hover:text-prl"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
