import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./Home";
import Restaurant from "./Restaurant";
import { BrowserRouter, Routes , Route } from "react-router";
import Restaurantmenu from "./Restaurantmenu";
import SearchFood from "./SearchFood";

function App(){
    return (
        <>
        <BrowserRouter>
        < Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/restaurant/city/pune/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
        <Route path="/restaurant/city/pune/:id/search" element={<SearchFood></SearchFood>}></Route>

        </Routes>
        </BrowserRouter>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);