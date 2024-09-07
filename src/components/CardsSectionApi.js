import Card from "./Card";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const CardsSectionApi = () =>{
    const [filterCards, setFilterCards] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        // console.log("useEffect called");
        fetchedData();
    },[])

    // ------if api change in futute just modify this method--------
    const fetchedData = async () =>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.73390&lng=76.78890");
        const json = await data.json();
        const finalData = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setFilterCards(finalData);
        setSearchFilter(finalData)
        // console.log(json);
    } 
    

    if(filterCards.length === 0){
      return ( <ShimmerUI /> )
    }

    return (
        <>  
            {/* filter button */}
            <button onClick={()=>{
              const filteredList = filterCards.filter((res)=> res.info.avgRating > 4.4);
              setSearchFilter(filteredList)}}>Top Rated Resturents</button>
                <br />
              <input type="text"  value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
            }}/>

            {/* search functionality */}
            <button onClick={()=>{
            const filterOperation = filterCards.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchFilter(filterOperation);
            }}>Search</button>

            {/* main section */}
            <div className='cardsSection'>
              {
                searchFilter.map((resturent)=>(<Card key={resturent.info.id} resData = {resturent}/>))  
              }
            </div>
        </>
    )
}

export default CardsSectionApi;