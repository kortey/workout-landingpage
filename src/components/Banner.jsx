import Header from "./Header";
import Hero from "./Hero";

function Banner() {
    return (
      <div id="home" className="w-full relative mb-20">
        <Header />
        <Hero />
      </div>
    );
  }
  
  export default Banner;