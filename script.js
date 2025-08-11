import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import FoodOpetions from "./FoodOpetions";
import GroceryOpetion from "./GroceryOpetion";
import DineOption from "./DineOption";



function App(){
    return (
        <>
        <Header></Header>
        <FoodOpetions></FoodOpetions>
        <GroceryOpetion></GroceryOpetion>
        <DineOption></DineOption>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);