import { useEffect, useState } from "react"

const useRestInfo = () => {
    const [restInfoApi, setResInfoApi] = useState(null);
    useEffect(()=>{
       fetchInfo();
    })

    const fetchInfo = async() =>{
        const apiData = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=41350&");
        const jsonData = await apiData.json();
        setResInfoApi(jsonData.data);
    }

    return restInfoApi;
}

export default useRestInfo;