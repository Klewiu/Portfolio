import React from 'react'
import influencio from '../assets/Influencio_web.JPG'
import pasieka from '../assets/pasieka.JPG'
import cutit from '../assets/Cutit_web.JPG'
import portfolio from '../assets/porfolio_web2.JPG'





const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] bg-fade'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff9869ff]'>Work</p>
                <p className='py-6'>//Checkout some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}

                {/* INFLUENCIO */}

                <div 
                style={{backgroundImage:`url(${influencio})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                    
                    {/* hover effect */}

                    <div className='invisible group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        DJANGO / BOOTSTRAP
                        </span>
                        <div className='pt-8 text center'>
                            <a href='https://influencio.pl/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Klewiu/influencio'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                  {/* PASIEKA RADOSC */}

                <div 
                style={{backgroundImage:`url(${pasieka})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                    
                    {/* hover effect */}

                    <div className='invisible group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        DJANGO / HTML
                        </span>
                        <div className='pt-8 text center'>
                            <a href='https://www.pasiekaradosc.pl/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Klewiu/joyful_bees'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                    
                </div>

                  {/* CUT-IT */}

                <div 
                style={{backgroundImage:`url(${cutit})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                    
                    {/* hover effect */}

                    <div className='invisible group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        DJANGO / HTMX
                        </span>
                        <div className='pt-8 text center'>
                            <a href='https://www.pasiekaradosc.pl/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Klewiu/joyful_bees'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                    
                </div>
                
              {/* PORTFOLIO APP */}

              <div 
                style={{backgroundImage:`url(${portfolio})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                    
                    {/* hover effect */}

                    <div className='invisible group-hover:visible'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        REACT/TAILLWIND
                        </span>
                        <div className='pt-8 text center'>
                            <a href='https://www.pasiekaradosc.pl/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Klewiu/joyful_bees'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>

                    
                </div>


            </div>
            
    

        </div>
    </div>
  )
}

export default Work