import React, { useEffect, useState } from "react";
import Item from "./Item";

function LoadItem() {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <div>
      <h1>Load item</h1>
      <div className="grid grid-cols-3 gap-4">
        {items && items.map((item, index) => <Item item={item} key={index} />)}
      </div>
    </div>
  );
}

export default LoadItem;
