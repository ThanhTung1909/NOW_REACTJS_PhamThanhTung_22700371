import React from 'react'

function Pagination() {
  return (
    <div className="flex justify-end items-center mt-5 gap-2">
        <img src="/3_Data/Lab_02_b/Button 89.png" alt="" />
        <button className="bg-pink-500 text-white text-center w-8 h-8 border rounded-xl flex items-center justify-center">
          1
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          2
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          3
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          4
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          ...
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          10
        </button>
        <button className=" bg-gray-100 outline-gray-500 text-gray-500 text-center w-8 h-8 border-[3px]
         border-gray-500 rounded-xl flex items-center justify-center ">
          11
        </button>
        <img src="/3_Data/Lab_02_b/Button 96.png" alt="" />
      </div>
  )
}

export default Pagination