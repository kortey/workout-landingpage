function Contact() {
    return (
      <section id="contact" className="flex flex-col sm:flex-row w-[90%] mx-auto sm:justify-center gap-[30px] mb-20">
        <div className="sm:h-20 sm:w-2 bg-[#0ef]"></div>
        <h1 className="text-2xl md:text-4xl font-bold">READY TO LEVEL UP YOUR <br /> BODY WITH US</h1>
         <div className="contact-input rounded-md">
           <input type="email" />
           <button className="contact-btn text-[10px]">Join Now</button>
         </div>
      </section>
    );
  }
  
  export default Contact;