import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import FoodOpetions from "./FoodOpetions";
import GroceryOpetion from "./GroceryOpetion";
import DineOption from "./DineOption";
import Restaurant from "./Restaurant";


function App(){
    return (
        <>
        <Header></Header>
        <FoodOpetions></FoodOpetions>
        <GroceryOpetion></GroceryOpetion>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);