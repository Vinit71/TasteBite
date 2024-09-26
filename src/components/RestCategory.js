import { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = (props) => {
  const { labels, foods, showIndex, setShowIndex, dummy } = props;  //we dont need 'dummy' in this component just need to pass to the ItemList from here.

  const clickHandler = () => {
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
        <div className="w-full max-w-4xl px-4" onClick={(e)=>{
          e.stopPropagation();
        } }>
          { showIndex && <ItemList foods={foods} dummy={dummy} />}
        </div>
      </div>
    </>
  );
};

export default RestCategory;
