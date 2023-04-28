import workout from "../assets/images/workout.jpg"

function WhyUs() {
    return (
      <div id="whyus" className="why-us flex w-[90%] items-center flex-col mx-auto sm:flex-row gap-[30px] sm:justify-between md:justify-around mt-20 sm:items-top"  >
        <div className=" border-[5px] border-[#0ef]">
            <img src={workout} alt="" className="max-w-[200px] sm:max-w-[400px] "/>
        </div>
        <div>
          <p className="text-[13px] text-[#0ef] mt-0">SOME REASONS</p>
          <h1 className="text-2xl md:text-3xl font-bold">WHY CHOOSE US ?</h1>
          <p className="mb-1 text-[15px]">OVER 100+ EXPERT COACHES</p>
          <p className="mb-1 text-[15px]">TRAIN SMARTER AND FASTER </p>
          <p className="mb-1 text-[15px]">1 FREE PROGRAM FOR NEW MEMBERS</p>
          <p className="mb-5 text-[15px]">RELIABLE PARTNERS</p>
          <button  className="pricing-btn group-hover:bg-white group-hover:text-black bg-[transparent] text-white border border-[#0ef] border-[1px s0lid] px-10 py-2 text-[12px]">Join Now</button>
        </div>
      </div>
    );
  }
  
  export default WhyUs;