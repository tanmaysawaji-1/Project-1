import Restinfo from "./Restinfo"
export default function Menucard({menuitems}){

    if("categories" in menuitems){
        return(
            <div className="w-full">
                <p>{menuitems.title}</p>
                <div>
                {
                    menuitems?.categories?.map((items)=><Menucard key={items?.title} menuitems={items}></Menucard>)
                }
                </div>
            </div>
        )
    }
    return(
        <>
        <div className="w-full">
            <p>{menuitems.title}</p>
            <div>
                {
                    menuitems.itemCards?.map((items)=><Restinfo key={items?.card?.info?.id} resData={items?.card?.info}></Restinfo>)
                }
            </div>
        </div>
        </>
    )
}