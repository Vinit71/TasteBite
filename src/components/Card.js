import { useContext } from "react";
import { IMG_URL } from "../utils/constants.js";
import userContext from "../utils/UserContext.js";
const Card = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData.info;

  let modifiedAvgRating = avgRating;
  if (avgRating == undefined) {
    modifiedAvgRating = "No ratings";
  } else if (avgRating % 1 == 0) {
    modifiedAvgRating = avgRating + ".0";
  }

  const {userName} = useContext(userContext);

  return (
    <div  data-testid="testCard"  className="border border-black bg-gray-300 w-72 mb-4">
      <img
        className="w-full h-48 object-cover"
        src={IMG_URL + cloudinaryImageId}
        alt=""
      />
      <h1 className="text-xl">
        {name.length > 15 ? name.slice(0, 15) + "..." : name}
      </h1>
      <h2>{costForTwo}</h2>
      <p>{cuisines.join(", ").slice(0, 35) + "..."}</p>
      <h2>{modifiedAvgRating}</h2>
      {/* <h3>{userName}</h3> */}
    </div>
  );
};

//HOC ( High Order Component ) is a function that recieves an component and return a component,
//important note HOC are functions not component as they are not returning jsx directly. they are returing a component that willl return jsx.

//--i am creating a HOC to add a 'label feature to promoted resturants'
export const promotedCard = (Card) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-purple-900 text-white px-2 py-1">
          Promoted
        </label>
        <Card {...props} />
      </>
    );
  };
};

export default Card;
