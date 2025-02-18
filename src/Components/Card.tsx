import { useState } from "react";

const Card:React.FC =() =>{
    
    return(
        <div className={`text-center h-50 w-64 md:w-72 lg:w-80 border-emerald-500 border-2 rounded-xl perspective(1000px)`} onMouseMove={(e)=>{onTouch(e)}} onMouseEnter={()=>{onEnter()}} onMouseLeave={()=>{onLeave()}}>
       

        </div>
    )
}
export default Card;