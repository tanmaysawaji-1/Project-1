import { Grocery } from "./Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOpetion(){
    return(
        <>
        <div className="w-[80%] mt-20 container mx-auto">
            <h1 className="mb-20">Shop Groceries on Instamart</h1>
        <div className="w-[100%] container mx-auto flex flex-wrap gap-10">
        {
            Grocery.map((GroceryData)=><GroceryCard key={GroceryData?.id} GroceryData={GroceryData}></GroceryCard>)
        }
        </div>

        </div>
        </>
    )
}