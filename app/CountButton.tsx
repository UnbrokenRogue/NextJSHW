
import { useState, useEffect } from "react"
import "./CountButton.css"

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

    const buttonStyle = {
        // backgroundColor: "pink",
        color: "black",
        backgroundColor: props.color,
        // USED PROPS TO DEFINE COLOR WANT MY EXTRA POINTS
    }

    useEffect(rollOverCount, [count])

    return (
        <div className = "btnStyle">
        <button style = {buttonStyle} onClick={handleClick}>+{props.incrementval}</button>
        {/* style = {{backgroundColor:"pink"}} //This goes INSIDE OF <button  > (like before onClick)*/    }
        {/* <p>{props.name}</p> */}
        <div>{count}</div>
        </div>
    )
}
