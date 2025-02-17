import React from 'react';
import Navbar from '../components/navbar';
import heroimg from "../assets/HomePage.png";
import aboutimg from "../assets/about-back.png"
import busnscollab from "../assets/businscollab.png"
import loansimg from "../assets/loans-img.png"
import payment from "../assets/payment.png" 
import contact from "../assets/contact.png"

export default function Home() {
  return (
    <div>
      <Navbar />
      <section 
        id="home" 
        className="relative h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center p-[4%]">
          <h1 className="text-8xl font-serif font-medium text-white ml-[10%]">Ekya</h1>
          <p className="text-4xl font-light text-white ml-[10%]">Dreams and Teams Work Together</p>
          <div className="ml-[10%]">
            <button className="bg-[#33B687] text-white rounded-xl px-6 py-3 mt-[1%] hover:bg-[#39cc96]">
              Know More
            </button>
          </div>
        </div>
      </section>

      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${aboutimg})` }}>
        <div className=" bg-white text-black items-center mx-auto justify-center shadow px-[3%] py-[4%]">
            <h2 className="text-5xl font-normal text-center mb-8 font-serif">About EKYA</h2>
            <p className="text-center text-2xl max-w-2xl mx-auto font-sans">
            EKYA is the cutting-edge digital platform that serves as a dynamic hub for businesses operating within similar or related industries to seamlessly come together and embark on collaborative ventures 
            </p>
            <p className="text-center text-2xl max-w-2xl mx-auto mb-[2%] font-sans">
            In a world where connections and partnerships are paramount, EKYA stands as a pioneering solution, fostering a vibrant ecosystem where enterprises can synergize their strengths, share insights, and collectively shape the future of their industries through collaboration
            </p>
        </div>
      </section>

      <section id="services" className="p-[5%] bg-gray-100 text-black">
        <h2 className="text-5xl font-normal text-center mb-[3%] font-serif mt-[3%]">Our Services</h2>
        <p className='text-center text-2xl mx-[3%] font-sans'>EKYA: Empowering MSMEs through innovation, connecting businesses, and driving economic growth in India. Fostering a strong collaboration ecosystem, bolstering payment capacity, enabling supply chain funding, and facilitating loans, redefining the Indian business landscape.</p>
        <div className="flex justify-center space-x-14 mx-20 mt-[5%]">
            <div className="flex flex-col items-center text-center rounded-lg w-[50%] bg-[#e5e5f0] rounded-t-full pb-[2%]">
            <img src={busnscollab} alt="Business Collaboration" className="w-full object-cover mb-0" />
            <h3 className="text-2xl font-semibold mb-[1%] mt-[5%]">Business Collaboration</h3>
            <p className="text-lg mx-[2%]">We help you bring together innovative minds to foster strong business relationships.</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-lg w-[50%] bg-[#e5e5f0] rounded-t-full">
            <img src={payment} alt="Dealers Payment" className="w-full object-cover mb-0" />
            <h3 className="text-2xl font-semibold mb-[1%] mt-[8%]">Dealers Payment Capacity</h3>
            <p className="text-lg mx-[2%]">Ensuring smooth and secure payment processes for your dealership network.</p>
            </div>
            <div className="flex flex-col items-center text-center rounded-lg w-[50%] bg-[#e5e5f0] rounded-t-full">
            <img src={loansimg} alt="Loan Arrangements" className="w-full object-cover mb-0" />
            <h3 className="text-2xl font-semibold mb-[1%] mt-[8%]">Loan Arrangements</h3>
            <p className="text-lg mx-[2%]">Providing easy access to loan services for smooth business operations.</p>
            </div>
        </div>
        </section>
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

      <section id="contact"
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-35">
            <h2 className="text-5xl font-normal font-serif text-center mb-8 text-white">Contact Us</h2>
            <form className="">
            <div className="mb-4">
                <label className="block text-xl text-white mb-2" htmlFor="name">Name</label>
                <input className="w-full p-2 border border-gray-400 " type="text" id="name" name="name" />
            </div>
            <div className='flex space-x-5'>
                <div className="mb-4">
                    <label className="block text-xl text-white m mb-2" htmlFor="email">Email</label>
                    <input className="w-full p-2 border border-gray-400 " type="email" id="email" name="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-xl text-white mb-2" htmlFor="phone">Phone Number</label>
                    <input className="w-full p-2 border border-gray-400" type="text" id="phone" name="phone" />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-xl text-white mb-2" htmlFor="message">Message</label>
                <textarea className="w-full p-2 border border-gray-400" id="message" name="message"></textarea>
            </div>
            <button className="bg-[#33B687] text-white font-normal text-lg hover:bg-[#39cc96] px-[8%] py-[3%]">Send</button>
            </form>
        </div>
      </section>
    </div>
  );
}
