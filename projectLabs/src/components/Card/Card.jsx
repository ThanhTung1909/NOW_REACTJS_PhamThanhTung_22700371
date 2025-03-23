import React from "react";

function Card({ menu,  }) {
  return (
    <div
      className="flex flex-col border border-gray-100 pb-4 rounded-2xl
      w-[250px]"
    >
      <div className="border-none">
        <img
          src={menu?.image}
          alt=""
          className="rounded-t-2xl border-none w-full"
        />
      </div>
      <div className="flex items-center p-2">
        <p className="text-ld font-bold text-left w-[80%]">{menu?.name}</p>
        <img
          src="public/3_data/Lab_02_b/Icon button 73.png"
          alt=""
          className="w-10 h-10"
        />
      </div>
      <div className="flex justify-center items-center bg-pink-100 rounded-2xl p-1 w-25 ml-2">
        <p className="text-12 text-pink-300 text-left">{menu?.time}</p>
      </div>
    </div>
  );
}

export default Card;
