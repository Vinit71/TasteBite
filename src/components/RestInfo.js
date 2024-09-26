import React, {useState} from "react";
import resList2 from "../utils/mockData2.js";
import { useParams } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import resInfoData from "../utils/resInfoData.js";
import RestCategory from "./RestCategory.js";

const RestInfo = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null)

  const userStatus = useUserStatus();

  const test2 = resInfoData.find((res) => resId == res.id);
  const { cards } = test2;

  const dummy = "Dummy";  //prop drilling example

  if (userStatus === false) {
    return (
      <h1>Looks like you dont pay for the wifi or having a cheaper plan! 😂</h1>
    );
  }
  return (
    <div className="">
      {cards.map((category, index) => (
        <RestCategory
          key={category.type} //This might cause issue
          labels={category.type}
          foods={category.foods}

          //-----uplifting the state up-----
          showIndex = {showIndex == index}
          setShowIndex = {() => setShowIndex(showIndex == index ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestInfo;
