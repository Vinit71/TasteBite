import React from 'react'
import resList2 from '../utils/mockData2'
import './resInfo.css'
import { useParams } from 'react-router-dom'
import useUserStatus from '../utils/useUserStatus'

const RestInfo = () => {
  const {resId} = useParams();
  // const ResId = "254108";
  const uniqueRes = resList2.find((res)=> res.info.id == resId);  
  const {name, cuisines, costForTwo, avgRatingString, totalRatingsString, veg} = uniqueRes.info;
  const userStatus = useUserStatus();

  if(userStatus === false){
    return(
      <h1>Looks like you dont pay for the wifi or having a cheaper plan! 😂</h1>
    )
  }
  return (
    <>
      <div>
      <h2 className="name">{name}</h2>
      <p className="cuisines">{cuisines.join(', ')}</p>
      <p className="details">
        <strong>Cost for Two:</strong> ₹{costForTwo}
      </p>
      <p className="details">
        <strong>Average Rating:</strong> {avgRatingString} ({totalRatingsString} ratings)
      </p>
      <p className={`veg-status ${veg ? 'veg' : 'non-veg'}`}>
        <strong>Status:</strong> {veg ? "Vegetarian" : "Non-Vegetarian"}
      </p>
    </div>
    </>
  )
}

export default RestInfo
