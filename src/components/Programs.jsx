import ProgramsCard from "./ProgramsCard";
import { BeakerIcon } from '@heroicons/react/24/solid'
import {FaDumbbell } from 'react-icons/fa';
import {FaRunning } from 'react-icons/fa';
import {FaFire } from 'react-icons/fa';
import {FaHeartbeat } from 'react-icons/fa';


function Programs() {
    return (
      <section id="programs" className="mb-10 w-[90%] mx-auto" >
          <h1 className="text-2xl font-bold md:text-4xl text-center mb-10">PROGRAMS</h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[10px] md:gap-[30px] w-full items-center sm:justify-center">
            <ProgramsCard 
              Icon={<FaDumbbell  className="h-8 W-10"/>}
              title="Strength Training"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate?"

            />
              <ProgramsCard 
              Icon={<FaRunning  className="h-8 W-10"/>}
              title="Strength Training"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate ?"

            />
              <ProgramsCard 
              Icon={<FaFire  className="h-8 W-10"/>}
              title="Strength Training"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate ?"

            />
              <ProgramsCard 
              Icon={<FaHeartbeat  className="h-8 W-10"/>}
              title="Strength Training"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate ?"

            />
          </div>
      </section>
    );
  }
  
  export default Programs;
  