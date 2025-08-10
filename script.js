import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import FoodOpetions from "./FoodOpetions";
import GroceryOpetion from "./GroceryOpetion";

function App(){
    return (
        <>
        <Header></Header>
        <FoodOpetions></FoodOpetions>
        <GroceryOpetion></GroceryOpetion>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);