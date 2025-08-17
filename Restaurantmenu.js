import { useParams } from "react-router"
export default function Restaurantmenu(){
    let id = useParams();
    console.log(id);
    return(
       <>
       <p>Hello Tanmay</p>
       </> 
    )
}