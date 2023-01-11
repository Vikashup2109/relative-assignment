import React from 'react';
import trendingIcon from './assets/trendingIcon.svg'
import Card from './components/Card';

function App() {
     return (
          <>
               <section className='bg-[#14172B] h-screen py-40'>
                    <div className='w-11/12 mx-auto px-4 text-[#ECF0FF]'>
                         <h3 className='flex gap-3 items-center'>
                              <img src={trendingIcon} alt="Trending Icon" />
                              <span>Trending Assets</span>
                         </h3>
                         <div className='grid grid-cols-5 gap-10 py-20'>
                              <Card />
                         </div>

                    </div>
               </section>
          </>
     );
}

export default App;
