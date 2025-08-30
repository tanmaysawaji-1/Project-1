import { useState } from "react";

export default function Restinfo({resData}){

    const [count, setcount] = useState(0);

    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
            <div className="w-[70%]">
                <p className="text-2xl  font-semibold mb-1">{resData?.name}</p>
                <p className="text-xl">{"₹" + (resData?.variantsV2?.pricingModels?.[0]?.price ? resData.variantsV2.pricingModels[0].price / 100:resData.price/100)}</p>
                <span className="text-green-500">{resData?.ratings?.aggregatedRating?.rating ? resData?.ratings?.aggregatedRating?.rating : resData.ratings.aggregatedRating.rating}</span>
               {resData?.ratings?.aggregatedRating?.ratingCountV2 && (
               <span>({resData.ratings.aggregatedRating.ratingCountV2})</span>
)}

                <p>{resData?.description}</p>
            </div>
            <div className="w-[20%] h-36 relative ">
                <img  className="w-full h-full object-cove rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+resData?.imageId}></img>
                {
                    count===0?(<button className="absolute bottom-[-2px] right-3 shadow-md border border-white  rounded-xl text-xl text-green-700 px-6 py-2 bg-white" onClick={()=>setcount(1)}>ADD</button>):(
                    <div className="absolute flex gap-3  bottom-[-2px] right-3 shadow-md border border-white  rounded-xl text-xl text-green-700 px-6 py-2 bg-white">
                        <button onClick={()=>setcount(count-1)}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>setcount(count+1)}>+</button>
                    </div>
                    )
                }
            </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )

}
// resData?.ratings?.aggregatedRating?.rating 
// FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed
// "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ee9985e4-828b-4a0e-b99b-656442e80877_7492ef8f-5b57-4ca4-86e6-4a8981c38510.jpg_compressed