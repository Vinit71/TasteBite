import Card from "./Card";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import resList2 from "../utils/mockData2"

const CardsSection = () =>{
    const [filterCards, setFilterCards] = useState([]);
    useEffect(()=>{
        console.log("useEffect called");
        // fetchedData();
        localFetchedData();
    },[])

    // const fetchedData = async () =>{
    //  const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.73390&lng=76.78890");
    //  const json = await data.json();
     
    //  setFilterCards(json?.data?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    //  console.log(json);
    // } 
    
    const localFetchedData = () =>{
      // creating api problems as above api broke in between by itself
      setTimeout(() => {  
        setFilterCards(resList2)
      }, 500);
    }

    // return this
    if(filterCards.length === 0){
      return ( <h1>Loading....</h1> )
    }

    // else this
    return (
        <>
        <button onClick={()=>{
          const filteredList = resList.filter((res)=> res.info.avgRating > 4.4);
          setFilterCards(filteredList)}}>Top Rated Resturents</button>
          {/* {console.log(filterCards)} */}

        <div className='cardsSection'>
          {
            filterCards.map((resturent)=>(<Card key={resturent.info.id} resData = {resturent}/>))  
          }
        </div>
        </>
    )
}

export default CardsSection;