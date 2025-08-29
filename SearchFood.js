import { useState , useEffect } from "react";
import { useParams } from "react-router"
export default function SearchFood(){

     const {id} =useParams();
     const [food,setfood] = useState("");
     const [fooddata, setfooddata] = useState([]);

      useEffect(()=>{
     
         async function fetchdata(){
         const proxyserver= "https://cors-anywhere.herokuapp.com/";
         const swiggyapi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=${id}`;
         const response = await fetch(proxyserver + swiggyapi);
         const data = await response.json();
         const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         const filterdata = tempdata.filter((items)=>'title' in items?.card?.card);
         setfooddata(filterdata);
         }

              fetchdata();
     },[]);

    return(
        <>
        <div className="w-[80%] mx-auto">
            <input className="w-full pl-10 py-4 text-2xl  rounded-xl mt-8 border  bg-gray-200 " placeholder="Search here" onChange={(e)=>setfood(e.target.value)}></input>
        </div>
        </>
    )
}