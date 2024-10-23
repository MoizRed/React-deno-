import NotFound from "./NotFound.tsx";
import Fruits from "./Fruits.tsx";
type obj = {
    display : boolean


}
export default function ConditionalComponent({display} : obj){

return display? <Fruits/> : <NotFound/>


}
