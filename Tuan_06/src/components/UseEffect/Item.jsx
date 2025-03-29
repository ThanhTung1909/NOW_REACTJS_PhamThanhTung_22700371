import React from "react";

function Item({ item }) {
  return (
    <div className="flex flex-col border border-solid border-blue-300 w-[250px] p-2">
      <div className="flex items-center justify-between gap-10">
        <p>
          UserId: <span>{item.userId}</span>
        </p>
        <p>
          Id: <span>{item.id}</span>
        </p>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <h3>Title: </h3>
        <p className="text-left">{item.title}</p>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <h3>body: </h3>
        <p className="text-left">{item.body}</p>
      </div>
    </div>
  );
}

export default Item;
