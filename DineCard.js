export default function DineCard({dinedata}){
    return (
        <>
        <div className="max-w-sm flex-none">
            <a target="_blank" href={dinedata?.cta?.link}>
            <div className="relative">
            <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + dinedata?.info?.mediaFiles[0]?.url}></img>
            <p className="absolute bottom-3 left-3 font-bold text-white text-xl z-10">{dinedata?.info?.name}</p>
            <p className="absolute bottom-3 right-3 font-bold text-white text-xl z-10">{dinedata?.info?.rating?.value}</p>
            <div className="absolute bg-gradient-to-t from-black h-6 bottom-0 left-0 right-0"></div>
            </div>
            </a>
        </div>
        </>
    )
}