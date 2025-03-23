import React from "react";
import Filter from "../../components/Filter/Filter";
import { data } from "../../../public/3_Data/Lab_03/data_03.js";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
function Labs04() {
  const salads = data;
  return (
    <div className="flex mt-10">
      <Filter />
      <div className="flex flex-col ml-10  w-[850px]">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">Salad(30)</p>
          <select
            className="border w-[150px] h-[30px] border-gray-300 rounded-lg"
            name=""
            id=""
          >
            <option value="A-Z">A-Z</option>
          </select>
        </div>
        <div className=" flex flex-wrap items-center justify-between gap-10 mt-10">
          {data.map((salad) => (
            <Card menu={salad} key={salad?.id} />
          ))}
        </div>
        <Pagination/>
      </div>
      
    </div>
  );
}

export default Labs04;
