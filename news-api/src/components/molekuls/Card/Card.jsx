import React from "react";

const Card = (props) => {
  return (
    <>
    <div className="flex flex-col py-2 px-4 rounded-md border border-black bg-transparent w-100 h-200 colomns-3">
      {/* <div key={props.index} className="border-1 border-gray-700/30 rounded"> */}
      <p className="flex flex-col py-5 px-4 text-xs opacity-75 my-2">{props.source}</p>
      <img
        src={props.Image}
        // alt={props.titleImg}
        className="px-4 aspect-[4/2] rounded-2xl"
      />
      <h1 className="text-lg px-4 py-5">{props.title}</h1>
      <p className="text-xs opacity-75 my-2 px-2">{props.author}</p>
      <p className="text-sm pl-2 px-4 mt-2 w-[fit-content]">{props.description}</p>
      <div className="flex flex-row mt-4 px-5 py-1">
        <a
          href={props.url}
          target="_blank"
          className="bg-blue-300 py-2 px-4 rounded mr-5"
        >
          News Pages
        </a>
        <button className="bg-blue-700 text-white py-2 px-4 rounded mr-5">
          Save
        </button>
      </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
