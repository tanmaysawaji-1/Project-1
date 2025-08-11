import { Grocery } from "./Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOpetion(){
    return(
        <>
        <div className="w-[80%] mt-20 container mx-auto">
            <h1 className="font-bold text-2xl">Shop Groceries on Instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-10">
        {
            Grocery.map((GroceryData)=><GroceryCard key={GroceryData?.id} GroceryData={GroceryData}></GroceryCard>)
        }
        </div>

        </div>
        </>
    )
}