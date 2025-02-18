import { useState } from "react";
const DarkMode: React.FC = () =>{
    const [toggle,setToggle] = useState(true);
    return(
        <div className={`w-12 h-6 mt-2 border-2 bg-white border-white rounded-full ` } onClick={()=>(setToggle(!toggle)) }>
                    <div className={`w-5 h-5 bg-amber-200 border-amber-400 border-2 rounded-full transform transition-transform duration-300 ${toggle?'translate-x-0':'translate-x-6'}`} ></div>
                    
        </div>
    )
};


export default DarkMode;