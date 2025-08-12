export default function RestCard({data}){
    return (
        <>
        <div>
            <img className="w-70 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.cloudinaryImageId}></img>
            <p>Hello</p>
        </div>
        </>
    )
}