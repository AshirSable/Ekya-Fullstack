import React from 'react'
import Navbar from '../components/navbar'

export default function Pricing() {
  return (
    <div>
      <Navbar/>
      <section id="pricing" className="">
        <h2 className="text-5xl font-normal font-serif text-center mb-8 bg-[#33B687] text-white p-[3%]">Pricing</h2>
        <div className="flex justify-center space-x-12 my-[6%]">
          <div className="text-center bg-white text-black w-[20%] border border-black ">
            <h3 className="text-3xl font-light font-sans mb-[4%] mt-[10%]">Free</h3>
            <p className="text-5xl font-normal mb-[8%]">$0</p>
            <hr className='border-t border-black w-full mb-[8%]'></hr>
            <p className='text-lg'>14 Days</p>
            <p className='text-lg'>2 Projects</p>
            <p className='text-lg'>3 Collaborators</p>
            <button className="bg-[#33B687] text-white rounded-lg mb-[6%] px-24 text-lg font-normal py-[2%] mt-[8%]">Select</button>
          </div>
          <div className="text-center bg-white text-black w-[20%] border border-black">
            <h3 className="text-3xl font-light font-sans mb-[4%] mt-[10%]">Standard</h3>
            <p className="text-5xl font-normal mb-[8%]">$8</p>
            <hr className='border-t border-black w-full mb-[8%]'></hr>
            <p className='text-lg'>1 Month</p>
            <p className='text-lg'>5 Projects</p>
            <p className='text-lg'>10 Collaborators</p>
            <button className="bg-[#33B687] text-white rounded-lg mb-[6%] px-24 text-lg font-normal py-[2%] mt-[8%]">Select</button>
          </div>
          <div className="text-center bg-white text-black w-[20%] border border-black">
            <h3 className="text-3xl font-light font-sans mb-[4%] mt-[10%]">Premium</h3>
            <p className="text-5xl font-normal mb-[8%]">$15</p>
            <hr className='border-t border-black w-full mb-[8%]'></hr>
            <p className='text-lg'>Unlimited Projects</p>
            <p className='text-lg'>Unlimited Collaborators</p>
            <button className="bg-[#33B687] text-white rounded-lg mb-[6%] px-24 text-lg font-normal py-[2%] mt-[17%]">Select</button>
          </div>
        </div>
      </section>
    </div>
  )
}
