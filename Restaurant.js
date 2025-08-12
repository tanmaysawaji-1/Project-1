import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant(){

    const [RestData, setRestData] = useState([]);

        useEffect(()=>{
            async function fetchdata() {
                const proxyserver = "https://cors-anywhere.herokuapp.com/";
                const swiggy = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5211&lng=73.8502&is-seo-homepage-enabled=true";
               const response = await fetch(proxyserver+swiggy);
               const data = await response.json();
               setRestData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }

            fetchdata();
        },[])
        
        return (
            <>
            <div className=" flex flex-wrap w-[90%] mx-auto mt-20 gap-5">
            {
               RestData.map((data)=><RestCard key={data.info?.id} data={data}></RestCard>) 
            }
            </div>
            </>
        )
}