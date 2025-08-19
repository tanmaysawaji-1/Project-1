import { useEffect, useState } from "react";
import { useParams } from "react-router"
export default function Restaurantmenu(){
    let id = useParams();

   const [Rdata, setdata] = useState(null);

   useEffect(()=>{

    async function fetchdata(){
    const proxyserver= "https://cors-anywhere.herokuapp.com/";
    const swiggyapi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    const response = await fetch(proxyserver + swiggyapi);
    const data = await response.json();
    setdata(data);
    }

    fetchdata();
},[]);

console.log(id);
console.log(Rdata)
    return(
       <>
      
       </> 
    )
}