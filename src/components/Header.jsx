import { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import {FaBars } from 'react-icons/fa';
import { XCircleIcon } from '@heroicons/react/24/solid'
import { click } from "@testing-library/user-event/dist/click";

function Header() {
     const [showMenu,setShowMenu] = useState(false)
    return (
    <header className="w-full mt-5 ">
        <nav className=" w-[90%] flex justify-between items-center mx-auto">
            <div className="flex items-center w-[100px]" >
                <h1 className="font-400 text-2xl md:text-3xl">FITCLUB</h1>
            </div>
            <div className="sm:hidden text-white">
                <FaBars className="sm:hidden"  onClick={()=> setShowMenu(!showMenu)}/>
            </div>
            
            <ul className="menu text-white " >

                <Link spy={true} smooth={true} offset={-80} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" to="">Home</Link>
                <Link spy={true} smooth={true} offset={-90} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" to="contact">Contact</Link>
                <Link spy={true} smooth={true} offset={-70} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" to="programs">Programs</Link>
                <Link spy={true} smooth={true} offset={-60} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" to="whyus">Why Us</Link>
                <Link spy={true} smooth={true} offset={-50} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" to="pricing">Pricing</Link>
            </ul>

           {showMenu && <ul className="mobile-menu flex flex-col absolute top-0 w-full bg-white text-gray-500 text-center">
                <Link spy={true} smooth={true} offset={-100} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" onClick={()=>setShowMenu(false)} to="/">Home</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" onClick={()=>setShowMenu(false)} to="about">About Us</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" onClick={()=>setShowMenu(false)} to="programs">Programs</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" onClick={()=>setShowMenu(false)} to="whyus">Why Us</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className="py-1 hover:text-[#0ef] cursor-pointer transition 0.5s ease-out font-700" onClick={()=>setShowMenu(false)} to="pricing">Pricing</Link>
            </ul>}
            <button  className="nav-btn bg-[#fff] text-gray-600 text-[10px] sm:text-[15px] hidden sm:inline-flex" >
                Join Now
            </button>
        </nav>
    </header>
    );
  }
  
  export default Header;