export default function Restinfo({resData}){
    const price = resData?.variantsV2?.pricingModels?.[0]?.price
    ? resData.variantsV2.pricingModels[0].price / 100
    : "N/A";
    return(
        <>
        <div className="flex w-full justify-between">
            <div className="w-[70%]">
                <p>{resData?.name}</p>
                <p>₹ {price}</p>
                <span>{resData?.ratings?.aggregatedRating?.rating}</span>
                <br></br>
                <span>{resData?.ratings?.aggregatedRating?.ratingCountV2}</span>
                <p>{resData?.description}</p>
                <hr></hr>
            </div>
            <div className="w-[20%] relative">
                <img  className="w-full h-36 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+resData?.imageId}></img>
                <button className="absoulte bottom-0 left-0 text-green-700 px-4 py-2 bg-white">ADD</button>
                <br></br>
            </div>
        </div>
        </>
    )

}
// FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed
// "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ee9985e4-828b-4a0e-b99b-656442e80877_7492ef8f-5b57-4ca4-86e6-4a8981c38510.jpg_compressed