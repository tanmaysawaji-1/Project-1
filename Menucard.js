import React, { useState } from "react";

import Restinfo from "./Restinfo"
import { Filter } from "lucide-react";
export default function Menucard({menuitems,foodselected}){


    const [isopen, setisopen] = useState(true);
    

    if("categories" in menuitems){
        return(
            <div className="w-full">
                <p className=" text-3xl font-bold mb-2">{menuitems.title}</p>
                <div>
                {
                    menuitems?.categories?.map((items)=><Menucard key={items?.title} menuitems={items} foodselected={foodselected}></Menucard>)
                }
                </div>
            </div>
        )
    }
       if("card" in menuitems){
        return(
            <div className="w-full">
                <p className=" text-3xl font-bold mb-2">{menuitems?.card?.card?.title}</p>  
                <div>
                {
                    menuitems?.card?.card?.itemCards?.map((items)=><Menucard key={items?.title} menuitems={items} foodselected={foodselected}></Menucard>)
                }
                </div>
            </div>
        )
    }

    if(!isopen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className=" text-3xl font-bold mb-2">{menuitems.title}</p>
            <button className="text-3xl text-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?'⌃':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

       if(foodselected==='veg'){
        return(
        <>
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className=" text-3xl font-bold mb-2">{menuitems.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setisopen(!isopen)}>{isopen?'⌃':'⌄'}</button>
            </div>
            <div>
                {
                    menuitems.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><Restinfo key={items?.card?.info?.id} resData={items?.card?.info}></Restinfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        </>
        )
    }

    if(foodselected==='nonveg'){
        return(
        <>
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className=" text-3xl font-bold mb-2">{menuitems.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setisopen(!isopen)}>{isopen?'⌃':'⌄'}</button>
            </div>
            <div>
                {
                    menuitems.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><Restinfo key={items?.card?.info?.id} resData={items?.card?.info}></Restinfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        </>
        )
    }

    return(

        <>
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className=" text-3xl font-bold mb-2">{menuitems.title}</p>
            <button className="text-3xl mr-10" onClick={()=>setisopen(!isopen)}>{isopen?'⌃':'⌄'}</button>
            </div>
            <div>
                {
                    menuitems.itemCards?.map((items)=><Restinfo key={items?.card?.info?.id} resData={items?.card?.info}></Restinfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        </>
    )
}