import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Menucard from "./Menucard";
import { Link } from "react-router";


export default function Restaurantmenu(){
    let id = useParams();
    const [selected, setselected] = useState(null);
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
       <div>
        <div className="w-[80%] mx-auto mt-10 mb-10">
            <Link to={`/restaurant/city/pune/${id.id}/search`}>
            <p className="w-full text-center py-4 rounded-2xl  bg-gray-200 text-2xl">Search for Dishes</p>
            </Link>
        </div>

        <div className="w-[80%] mx-auto mt-10 mb-10">
            <button className={`text-2xl py-2 px-4 mr-4 border rounded-2xl ${selected==="veg"? "bg-green-600":"bg-gray-300"}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"? "bg-red-600":"bg-gray-300"}`}  onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>NonVeg</button>
         </div>
       <div className="w-[80%] mx-auto">
        {
            Rdata.map((menuitems)=><Menucard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card} foodselected={selected}></Menucard>)
        }
       </div>
       </div>
       </> 
    )
}

