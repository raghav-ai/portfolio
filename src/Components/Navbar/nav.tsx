import { useState } from "react";
import { HiMenu } from "react-icons/hi";
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" text-4xl flex justify-between select-none  ">
      <div className="flex pl-5 pr-5">
          <ul className="hover:text-green-400">Dark</ul>
            <HiMenu className=" text-4xl mt-1 lg:hidden hover:bg-amber-300" onClick={()=>{setIsOpen(!isOpen)}}/>
        </div>
      <div className="lg:container lg:mx-auto flex justify-center ">
        <div className={`gap-9 lg:flex lg:mt-0 lg:text-center ${isOpen? 'block text-right mt-11 ':'hidden'}`}>
          <ul className="hover:text-green-400" >[About]</ul>
          <ul className="hover:text-green-400">[Resume]</ul>
          <ul className="hover:text-green-400">[Projects]</ul>
          <ul className="hover:text-green-400">[Garage]</ul>
        </div>
      </div>
        

    </nav>
  );
};
export default Navbar;
