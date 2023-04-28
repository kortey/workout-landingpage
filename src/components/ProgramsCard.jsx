
import {FaLongArrowAltRight } from 'react-icons/fa';



function ProgramsCard({title,description,Icon}) {
    return (
      <div  className=" programs-card group p-5 max-w-[250px]" >
          <h1 className="group-hover:text-black mb-3 text-[#0ef]">{Icon}</h1>
          <h3>{title}</h3>
          <p className="group-hover:text-black text-1xl text-gray-400 mt-2 mb-2">{description}</p>
          <button className="text-[10px] flex items-center">Join Now <span className='text-white group-hover:text-black' ><FaLongArrowAltRight className='w-8'/></span></button>


      </div>
    );
  }
  
  export default ProgramsCard;