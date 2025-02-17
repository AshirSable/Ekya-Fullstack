import React from 'react'
import Navbar from '../components/navbar'
import contact from "../assets/contact.png"

export default function Contact() {
  return (
    <div>
      <Navbar/>
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
  )
}
