import React from 'react'
import { useEffect, useState } from 'react'
import './resInfo.css'
import ShimmerUI from './ShimmerUI';
import useRestInfo from '../utils/useRestInfo';
const RestInfoApi = () => {

  const restInfoApi = useRestInfo();    //custom hook to fetch api
  if(restInfoApi === null) return <ShimmerUI />

  const {name, costForTwo, cuisines, avgRating} = restInfoApi?.cards[2]?.card?.card?.info;

  return (
    <>
      <h1>{name}</h1>
      <h1>{costForTwo/100}</h1>
      <h1>{cuisines.join(', ')}</h1>
      <h1>{avgRating}</h1>
    </>
  )
}

export default RestInfoApi
