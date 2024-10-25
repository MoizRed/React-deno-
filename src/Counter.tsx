type Props = {}
import { useState } from "react";
export default function Counter({}: Props) {
  

  const [Count, setCount] = useState(0);


    function Counter() {

     setCount(Count + 1)
        
       


    }
  
    return (
    <button onClick={Counter}> the count is : {Count}</button>
  )
}; 