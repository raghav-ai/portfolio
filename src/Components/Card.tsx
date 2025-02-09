import { useState } from "react";

const Card:React.FC =() =>{
    const [hover,setHover] = useState(false);
    const [x,setX] = useState(1);
    const [y,setY] = useState(1);
    const onEnter= () =>{
            setHover(true)
    };
    const onLeave = () =>{
            setHover(false)
    };
    const onTouch =  (e) =>{
            setX(e.clientX)
            setY(e.clientY)
    };
    return(
        <div className={`text-center h-50 w-64 md:w-72 lg:w-80 border-emerald-500 border-2 rounded-xl perspective(1000px)`} onMouseMove={(e)=>{onTouch(e)}} onMouseEnter={()=>{onEnter()}} onMouseLeave={()=>{onLeave()}}>
            <p>{`x: ${x}`}</p>
            <p>{`y: ${y}`}</p>



        </div>
    )
}
export default Card;