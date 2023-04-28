


function PricingCard({icon,title, price,feature1,feature2,feature3}) {
    return (
      <div  className=" pricing-card group flex flex-col items-start text-white hover:text-black hover:bg-[#0ef] transition-all transition-[0.5s]">
          <h1 className="text-[#0ef] group-hover:text-black mb-1" >{icon}</h1>
           <h2 className="text-2xl mb-2">{title}</h2>
           <h1 className="text-2xl mb-2 font-bold">{price}</h1>
           <p className="text-[12px] mb-1">{feature1}</p>
           <p className="text-[12px] mb-1">{feature2}</p>
           <p className="text-[12px] mb-2">{feature3}</p>
           <button  className="pricing-btn group-hover:bg-white group-hover:text-black bg-[transparent] text-white border border-[#0ef] border-[1px s0lid] px-10 py-2 text-[12px]">Join Now</button>
      </div>
    );
  }
  
  export default PricingCard;