
import { useState, useEffect } from "react"

export default function CountButton(props){

    let [count, setCount] = useState(0);
    
    function handleClick(){
        setCount(count + props.incrementval)
    }

    function rollOverCount(){
        if(count > 10){
            setCount(0)
        }
    }

    useEffect(rollOverCount, [count])

    return (
        <div>
        <button onClick={handleClick}>+{props.incrementval}</button>
        <p>{props.name}</p>
        <div>{count}</div>
        </div>
    )
}
