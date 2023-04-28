
function TestimonialsCard({image,content,name}) {
    return (
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-around ">
         <div className="">
            <p className="text-1">{content}</p>
            <p className="mt-10 text-[#0ef]">{name} - <span className="text-white">Entrepreneur</span></p>
         </div>
         <div>
            <img src={image} alt="user" className="max-w-[200px] border-[#0ef] border-[2px] rounded-md"/>
         </div>
      </div>
    );
  }
  
  export default TestimonialsCard;