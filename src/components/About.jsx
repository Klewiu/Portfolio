import React from "react";
import obraz from "../assets/obraz.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[100px]'">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff9869ff]">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-xl text-[#8892b0]">
              <p>
                Hi! I am a Mechatronics engineer who works as a Production Manager and deals with programming after work.
                I mainly work in Python and Django framework with TailwindCSS, Bootstrap, Htmx...
                <p className="py-1">Additionally, I develop my skills with React. I am passionate about creating beautiful and  functional web applications.</p>
                
              </p>  
            </div>
            <div>
              <p> 
                <img src={obraz} alt='avatar' style={{ width: '180px', borderRadius:10} } />
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
