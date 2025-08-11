export default function GroceryCard({GroceryData}){
    return (
        <>
        <div className="flex-none">
            <a href={GroceryData?.action?.link}>
                <img  className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GroceryData?.imageId}></img>
            </a>
            <h2 className=" text-center font-bold">{GroceryData?.description}</h2>
        </div>
        </>
    )
}