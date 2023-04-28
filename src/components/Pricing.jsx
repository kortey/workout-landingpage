
// FaHandHoldingHeart
// FaCrown
// FaTemperatureHigh
import {FaTemperatureHigh } from 'react-icons/fa';
import {FaCrown } from 'react-icons/fa';
import {FaHandHoldingHeart } from 'react-icons/fa';

import PricinCard from "./PricingCard"
function Pricing() {
    return (
      <div id="pricing" className='mt-20 pb-20'>
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold mb-5">PRICING</h1>
        <p className='text-center mb-5 text-[12px] sm:text-[15px]'>Start your journey with us to shape and build your body. <br /> You can join us as you pick and pay for your plan</p>
        <div className="flex flex-col gap-3 sm:gap-10 items-center sm:flex-row sm:justify-center sm:flex-wrap">
          <PricinCard 
           icon={< FaTemperatureHigh className='h-8 w-8'/>}
           title="BASIC PLAN"
           price="$25"
           feature1="2 hours of exercise"
           feature2="free consultation with coaches"
           feature3="Access to the Fitclub community"

          />
          <PricinCard 
           icon={< FaCrown className='h-8 w-8'/>}
           title="PREMIUM PLAN"
           price="$30"
           feature1="5 hours of exercise"
           feature2="free consultation with coaches"
           feature3="Access to the Fitclub community"

          />
          <PricinCard 
           icon={< FaHandHoldingHeart className='h-8 w-8'/>}
           title="PRO PLAN"
           price="$45"
           feature1="8 hours of exercise"
           feature2="free consultation with coaches"
           feature3="Access to the Fitclub community"

          />
        </div>
      </div>
    );
  }
  
  export default Pricing;