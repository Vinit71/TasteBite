import { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = (props) => {
  const { labels, foods, showIndex, setShowIndex } = props;
  // console.log("card", labels);

  const clickHandler = () => {
    // setShowItems(!showItems)
    setShowIndex();
  }

  return (
    <>
      {/* Accordion header */}
      <div className="flex flex-col items-center w-6/12 mx-auto text-center bg-gray-200 my-2" onClick={clickHandler}>
        <div className="flex justify-between w-full max-w-4xl px-4 py-2">
          <span className="text-2xl font-bold">
            {labels} ({foods.length})
          </span>
          <span className="text-2xl font-bold">🔽</span>
        </div>


        {/* Accordion body */}
        <div className="w-full max-w-4xl px-4">
          { showIndex && <ItemList foods={foods} />}
        </div>
      </div>
    </>
  );
};

export default RestCategory;
