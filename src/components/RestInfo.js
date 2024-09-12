import React from "react";
import resList2 from "../utils/mockData2.js";
import { useParams } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import resInfoData from "../utils/resInfoData.js";
import RestCategory from "./RestCategory.js";

const RestInfo = () => {
  const { resId } = useParams();
  // const ResId = "254108";
  const uniqueRes = resList2.find((res) => res.info.id == resId);
  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    totalRatingsString,
    veg,
  } = uniqueRes.info;
  const userStatus = useUserStatus();

  const test2 = resInfoData.find((res) => resId == res.id);
  const { cards } = test2;

  console.log(cards);

  if (userStatus === false) {
    return (
      <h1>Looks like you dont pay for the wifi or having a cheaper plan! 😂</h1>
    );
  }
  return (
    <div className="">
      {cards.map((category, index) => (
        <RestCategory
          key={index}
          labels={category.type}
          foods={category.foods}
        />
      ))}
    </div>
  );
};

export default RestInfo;
