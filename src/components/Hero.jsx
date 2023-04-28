import bannerImage from "../assets/images/hero.png"
function Hero() {
    return (
      <div className="md:flex justify-between mt-20"  >
          <div className="hero-left flex-1 ml-[50px] flex flex-col " >
            <div className="button-tag w-[90%]  sm:w-[70%] md:ml-0 mb-5 mr-3">
               <span >THE BEST</span>
               <p >FITNESS CLUB IN THE TOWN</p>
            </div>
            <h1 className="text-4xl md:text-7xl md:font-bold mb-5" >SHAPE <span className="text-[#0ef]">YOUR IDEAL BODY</span> </h1>
            <p className="text-gray-400" text-1xl>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate harum in reiciendis cumque facilis?</p>
            
            <div className=" flex gap-[30px] w-full mt-4 flex-wrap">
                <div>
                    <h2 className="text-3xl">140+</h2>
                    <small className="text-gray-500">EXPERT COACHES</small>
                </div>
                <div>
                    <h2 className="text-3xl">600+</h2>
                    <small className="text-gray-500">MEMBERS JOINED</small>
                </div>
                <div>
                    <h2 className="text-3xl">40+</h2>
                    <small className="text-gray-500">FITNESS PROGRAMS</small>
                </div>
            </div>

            <div className="flex gap-[30px] mt-5 flex-wrap">
                <button className="btn-colored text-[10px]" >Get Started</button>
                <button className="btn-noncolored text-[10px]">Learn More</button>
            </div>
          </div>
           
          <div className="hero-right flex flex-1 justify-center items-center" >
              
              <img src={bannerImage} alt="banner image"  width="250px" className="z-100"/>
              <div className="green-square bg-[#0ef] h-full w-[25%] absolute top-0 right-0" ></div>
          </div>

      </div>
    );
  }
  
  export default Hero;