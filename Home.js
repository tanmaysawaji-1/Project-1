import Header from "./Header"
import FoodOpetions from "./FoodOpetions"
import GroceryOpetion from "./GroceryOpetion"
import DineOption from "./DineOption"

export  default function Home(){
    return (
        <>
        <Header></Header>
        <FoodOpetions></FoodOpetions>
        <GroceryOpetion></GroceryOpetion>
        <DineOption></DineOption>
        </>
    )
}