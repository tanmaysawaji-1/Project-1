import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import FoodOpetions from "./FoodOpetions";


function App(){
    return (
        <>
        <Header></Header>
        <FoodOpetions></FoodOpetions>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);