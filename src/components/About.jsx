import React from "react";
import obraz from "../assets/obraz.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
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
            <div className="sm:text-right text-3xl font-bold">
              <p>
                Hi. My name is Jakub Klewicki. Please take a look at my
                portfolio.
              </p>
            </div>
            <div>
              <p> 
                <img src={obraz} alt='avatar' style={{ width: '180px', borderRadius:180/2} } />
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
