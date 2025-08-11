import { imageGridCards } from "./Food"
import FoodCard from "./FoodCard"

export default function FoodOpetions(){

    return(
        <>
        <div className="w-[85%] container mx-auto flex flex-wrap mt-15 gap-5 ">
            {
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
            }
        </div>
        </>
    )
}


