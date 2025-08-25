import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Menucard from "./Menucard";



export default function Restaurantmenu(){
    let id = useParams();

   const [Rdata, setdata] = useState([]);

   useEffect(()=>{

    async function fetchdata(){
    const proxyserver= "https://cors-anywhere.herokuapp.com/";
    const swiggyapi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=${id.id}`;
    const response = await fetch(proxyserver + swiggyapi);
    const data = await response.json();
    const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filterdata = tempdata.filter((items)=>'title' in items?.card?.card);
    setdata(filterdata);
    }

    fetchdata();
},[]);
// console.log(id);
// console.log(Rdata);
    return(
       <>
       <div className="w-[80%] mx-auto">
        {
            Rdata.map((menuitems)=><Menucard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card}></Menucard>)
        }
       </div>
       </> 
    )
}

