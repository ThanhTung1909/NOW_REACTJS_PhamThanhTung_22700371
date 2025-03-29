import React from "react";
import Card from "../../components/Card/Card";
import { menu } from "../../../public/3_Data/Lab_02_b/data.js";
import Pagination from "../../components/Pagination/Pagination.jsx";

function Labs03() {
  const list = menu;
  return (
    <div className="flex flex-col w-full ">
      <div className="flex">
        <span>Home</span>
        <img
          src="/public/3_data/Lab_02_b/Arrow forward ios 2.png"
          alt=""
          className="ml-5"
        />
        <span className="text-red-500/100 ml-5">Your Recipe Box</span>
      </div>
      <div className="flex flex-col p-6 max-w-full text-left">
        <h1 className="text-2xl font-bold text-gray-900">
          Emma Gonzalez's Recipe Box
        </h1>
        <div className="flex mt-4">
          <div className="w-[20%] rounded-full overflow-hidden ">
            <img
              src="public/3_data/Lab_02_b/avatar.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-6 mt-5 w-full flex flex-col">
            <p>
              Emma Gonzalez is a deputy editor at Chefify, bringing her
              expertise as a former cooking editor at The Los Angeles Times. She
              is also an accomplished author, contributing to numerous cookbooks
              and food publications. Originally from East Los Angeles, Emma now
              resides in New York City, where she explores a wide range of
              culinary delights.
            </p>
            <div className="flex items-center mt-12">
              <span className="text-pink-600 text-xl font-medium">
                6.5K Subsribes
              </span>
              <button className="flex bg-pink-500 text-white ml-10 px-4 py-2 rounded-lg">
                Share
                <img src="public/3_data/Lab_02_b/Share fat.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 w-full border-b-2 border-gray-300">
        <div className="flex space-x-4">
          <button className="px-2 py-2 rounded-t-lg text-pink-500 bg-pink-100">
            Saved Recipes
          </button>
          <button className="px-2 py-2 text-gray-500">Folders</button>
          <button className="px-2 py-2 text-gray-500">
            Recipes by Genevieve
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-10 gap-10">
        {list.map((m) => (
          <Card menu={m} key={m.id} />
        ))}
      </div>
      <Pagination/>
    </div>
  );
}

export default Labs03;
