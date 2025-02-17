import React from 'react'
import Navbar from '../components/navbar'
import servicepage from "../assets/servicepage.png"
import servicecollab from "../assets/service-collab.png"
import servicedc from "../assets/service-dc.png"
import servicefin from "../assets/service-finance.png"

export default function Service() {
  const faqData = [
    {
      question: "How can Ekya help my business grow?",
      answer: "Ekya provides tools and resources for successful collaboration, financial solutions, and business ecosystem creation, leading to business growth.",
    },
    {
      question: "Can Ekya help me earn more than my average income?",
      answer: "Yes, by optimizing business operations and facilitating collaborations, Ekya can help you increase earnings.",
    },
    {
      question: "How does Ekya ensure secure collaborations?",
      answer: "Ekya offers legal assessment services to ensure collaborations are legally sound and secure, protecting your business interests.",
    },
    {
      question: "Can Ekya assist with financial planning and loans?",
      answer: "Ekya facilitates loans and offers financial guidance to support your business expansion efforts.",
    },
  ];
  
  return (
    <div>
      <Navbar/>
      <section
        id="About"
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${servicepage})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-35 px-[8%]">
            <h2 className=' text-5xl font-sans mb-[1%] text-white ml-[1%]'>Business Collaboration Simplified</h2>
            <p className='text-white font-light text-4xl '>"Comprehensive Solution For Seamless Business Operations"</p>
        </div>
      </section>
      <p className='text-2xl mx-[5%] text-center my-[6%]'>Are you looking to take your business to the next level? Ekya offers a unique software solution that provides all the tools
         you need for successful business collaboration. From legal assessments to financial solutions, Ekya helps you grow your business, 
         earn more than your average income, and establish trusted connections with other businesses.
         With Ekya, you can streamline your business processes and create a thriving ecosystem for success.</p>
         <div className="bg-gray-50 text-gray-900 p-8 space-y-16">
      <div className="space-y-16 mx-[5%] my-[5%]">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={servicecollab}
            alt="Business Collaboration"
            className="w-[25%] rounded-lg shadow-lg"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-4xl font-bold mb-4">Business Collaboration</h3>
            <p className='text-2xl'>
              EKYA offers personalized collaboration opportunities tailored to
              the specific needs of each business. Whether seeking strategic
              partners, sharing resources, or accessing industry insights,
              enterprises can find tailored solutions to drive their growth.
            </p>
            <p className="mt-4 italic text-gray-700 text-2xl">
              "Enhance Your Business Visibility Now", "Get Noticed on EKYA",
              "Showcase Your Strengths Today"
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={servicedc}
            alt="Dealers Payment Capacity"
            className="w-[25%] rounded-lg shadow-lg"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-4xl font-bold mb-4">Dealers Payment Capacity</h3>
            <p className='text-2xl'>
              EKYA offers personalized collaboration opportunities tailored to
              the specific needs of each business. Whether seeking strategic
              partners, sharing resources, or accessing industry insights,
              enterprises can find tailored solutions to drive their growth.
            </p>
            <p className="mt-4 italic text-gray-700 text-2xl">
              "Assess Vendor Reliability in Seconds - Try Our Evaluation Tool"
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={servicefin}
            alt="Loan Arrangements"
            className="w-[25%] rounded-lg shadow-lg"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-4xl font-bold mb-4">Loan Arrangements</h3>
            <p className='text-2xl'>
              EKYA offers personalized collaboration opportunities tailored to
              the specific needs of each business. Whether seeking strategic
              partners, sharing resources, or accessing industry insights,
              enterprises can find tailored solutions to drive their growth.
            </p>
            <p className="mt-4 italic text-gray-700 text-2xl">
              "Secure Your Financial Future, Achieve Financial Stability with Ekya, Grow Your Business Financially"
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#EEEEF5] py-[5%]">
        <h3 className="text-5xl font-normal font-serif text-center text-black mb-[4%]">Frequently Asked Questions</h3>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6 mx-[5%] bg-white px-[1%] py-[1%] rounded-2xl shadow text-xl">
            <p className="font-semibold mb-2">Q: {faq.question}</p>
            <p className="">A: {faq.answer}</p>
          </div>
        ))}
    </div>
    </div>
    
  )
}
