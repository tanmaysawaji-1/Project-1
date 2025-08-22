import { Link } from "react-router"

export default function RestCard({data}){
    return (
        <>
        <Link to={"/restaurant/city/pune/"+data?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
            <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data.info?.cloudinaryImageId}></img>
            <div className=" w-[95%] mx-auto mt-3">
            <div className="font-bold text-xl">{data?.info?.name}</div>
           
            <div className="flex items-center gap-2">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-green-600">
            <path d="M11.05 3.52c.32-.82 1.58-.82 1.9 0l1.7 4.3 4.64.37c.88.07 1.24 1.17.57 1.74l-3.53 3 1.08 4.5c.21.86-.73 1.54-1.48 1.07L12 16.96l-3.93 2.51c-.75.48-1.69-.21-1.48-1.07l1.08-4.5-3.53-3c-.67-.57-.31-1.67.57-1.74l4.64-.37 1.7-4.3z" />
            </svg>

            <span className="text-lg">{data?.info?.avgRating}</span>
            <span className="text-lg font-semibold">{data?.info?.sla?.slaString}</span>
            </div>
            <div className=" text-gray-600 text-lg mt-1 h-7 overflow-hidden">{data?.info?.cuisines.join(" ")}</div>
             </div>
        </div>
        </Link>
        </>
    )
}