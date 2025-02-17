import React from 'react';
import Navbar from '../components/navbar';
import abouthero from "../assets/abtus.png";
import dofor from "../assets/do-for.png"
import wedo from "../assets/we-do.png"
import profit from "../assets/profit.png"
import mission from "../assets/mission.png"
import working from "../assets/working.png"

export default function About() {
  return (
    <div>
      <Navbar />
      <section
        id="About"
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${abouthero})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-35 px-[5%]">
            <h2 className=' text-6xl font-serif mb-[1%] text-white'>About Us</h2>
            <p className='text-white font-light text-2xl text-center'>At Ekya, we are dedicated to revolutionizing the way businesses collaborate and operate. Our mission is to provide comprehensive, user-friendly solutions that streamline business processes, enhance productivity, and foster successful partnerships.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
      <div className="relative mx-[10%]">
        <div className="mb-8 flex items-center">
          <div className="w-1/3">
            <img
              src={wedo}
              alt="What we do"
              className="rounded shadow-lg w-[100%] "
            />
          </div>
          <div className="w-2/3 pl-8">
            <h3 className="text-3xl font-normal text-center">What we do</h3>
            <p className="text-gray-600 text-lg text-center mt-2 mx-[10%]">
              Ekya provides comprehensive collaboration services including legal assessment and financial solutions for businesses.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center">
          <div className="w-1/3 order-last">
            <img
              src={dofor} 
              alt="Who we do it for"
              className="rounded shadow-lg "
            />
          </div>
          <div className="w-2/3 pr-8">
            <h3 className="text-3xl font-normal text-center">Who we do it for</h3>
            <p className="text-gray-600 text-lg text-center mt-2 mx-[10%]">
              Business owners and professionals looking to grow their business and build trusted connections.
            </p>
          </div>
        </div>

        <div className="mb-8 flex items-center">
          <div className="w-1/3">
            <img
              src={profit}
              alt="What they get"
              className="rounded shadow-lg"
            />
          </div>
          <div className="w-2/3 pl-8">
            <h3 className="text-3xl font-normal text-center">What they get</h3>
            <p className="text-gray-600 text-lg text-center mt-2 mx-[10%]">
              By using Ekya, businesses can accelerate growth, increase earnings, and establish trustworthy collaborations with other businesses.
            </p>
          </div>
        </div>
      </div>
      <section
        id="About"
        className="relative bg-cover bg-center h-[30vh] rounded-3xl my-[8%]"
        style={{ backgroundImage: `url(${mission})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-35 px-[5%] rounded-3xl">
            <h2 className=' text-4xl font-sans mb-[1%] text-white'>Our Mission</h2>
            <p className='text-white font-light text-2xl text-center mx-[10%]'>To empower businesses with innovative tools that facilitate seamless collaboration, ensure legal and financial reliability, and provide the necessary financial support to thrive in a competitive market.
          </p>
        </div>
      </section>
    </div>
    <div
      className='bg-black h-[40vh]'
      >
        <p className='text-white text-center pt-[4%] font-sans text-4xl'>Our Offerings</p>
        <div className='flex row text-white text-2xl space-x-[5%] justify-center mt-[5%]'>
            <p>Business Collaboration</p>
            <p>Legal Assistance</p>
            <p>Finacial Arrangements</p>
            <p>Dealers Payment Capacity</p>
        </div>
      </div>
      <div className="bg-gray-100 text-black py-[10%] px-[5%]">
      <h2 className="text-center text-4xl font-bold mb-10">Our Values</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
          <hr className="border-t-2 border-black w-20 mb-4" />
          <p className='text-2xl'>We uphold the highest standards of integrity in all our interactions and assessments.</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
          <hr className="border-t-2 border-black w-20 mb-4" />
          <p className='text-2xl'>We continuously innovate to provide cutting-edge solutions that meet evolving business needs.</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">Collaboration</h3>
          <hr className="border-t-2 border-black w-20 mb-4" />
          <p className='text-2xl'>We believe in the power of collaboration, both within our team and with our clients, to achieve the best outcomes.</p>
        </div>
      </div>
    </div>
    <div>
      <p className='text-4xl font-semibold text-center mt-[4%]'>How Ekya Works</p>
      <img 
      className='mt-[5%]'
      src={working}></img>
    </div>
    </div>
  );
}
