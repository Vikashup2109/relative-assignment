import React from 'react'
// import ColorExtractor from 'react-color-extractor';
import { assets } from '../data'

const Card = () => {

     return (
          <>
               {assets.map(asset => {
                    const change = parseFloat(((asset.currentPrice - asset.previousPrice) / asset.previousPrice * 100).toFixed(2))
                    console.log(change)
                    return (
                         <>
                              <div className='card realtive w-full  bg-gradient-to-t from-[#626A88]/10 to-[#626A88]/10 flex flex-col rounded-2xl'>
                                   <div className='icon relative w-[100px] h-[80px] bg-[#14172B] rounded-b-full mx-auto z-10'>
                                        <div className='relative -top-3.5 w-fit mx-auto p-4 rounded-full bg-gradient-to-b from-[#626A88]/5 to-[#EAB300]/5'>
                                             <img src={asset.icon} alt="BitCoin SVG" className='' />
                                        </div>
                                   </div>
                                   <div className='pb-3'>
                                        <div className='text-center font-mono opacity-50 pt-6 pb-3'><span className='text-[13px]'>{`${asset.name}(${asset.symbol})`}</span></div>

                                        {/* Price of Asset */}
                                        <div>
                                             <div className='w-10/12 mx-auto rounded-full justify-end bg-[#14172B] py-1 flex gap-3 pr-6 items-center'>
                                                  <span className='font-bold font-mono text-md tracking-widest'>{asset.currentPrice}</span> {/* Current Price*/}
                                                  <span className={Math.floor(change) >= 0 ? "text-[11px] text-green-500 font-mono font-bold" : "text-[11px] text-red-500 font-mono font-bold"}>{`${change}%`}</span> {/* Change from last day*/}
                                             </div>
                                             <div className='py-1 text-center font-mono opacity-50 text-[12px]'>
                                                  <span>Price</span>
                                             </div>
                                        </div>

                                        {/* TVL of Asset */}
                                        <div className='pt-3'>
                                             <div className='w-10/12 mx-auto rounded-full text-center bg-[#14172B] py-1.5 '>
                                                  <span className='font-bold font-mono text-md tracking-widest'>$60,000</span> {/* Current Price*/}
                                             </div>
                                             <div className='py-1 text-center font-mono opacity-50 text-[12px]'>
                                                  <span>TVL</span>
                                             </div>
                                        </div>

                                        {/* pairs of Asset */}
                                        <div className='pt-4'>
                                             <div className='w-fit px-4 mx-auto rounded-full text-center bg-[#14172B] py-2 '>
                                                  <div className='w-fit flex gap-4 justify-center mx-auto'>
                                                       {
                                                            asset.pairs.map(pair => {
                                                                 return (
                                                                      <>
                                                                           <img src={pair} alt="Popular Pairs" className='w-6' />
                                                                      </>
                                                                 )
                                                            })
                                                       }
                                                  </div>
                                             </div>
                                             <div className='py-1 text-center font-mono opacity-50 text-[13px]'>
                                                  <span>Popular Pairs</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>
                    )
               })}
          </>
     )
}

export default Card