import React from 'react';

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 pb-24 pt-16">
      
      <div className="w-full lg:w-1/3 flex flex-col items-start ml-10">
        <span 
          className="bg-[#ffcbf2] px-2 py-0.5 text-[20px] text-black inline-block"
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          Contact here
        </span>
        
        <div className="ml-[100px] mt-4 mb-6">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5 C 15 15, 30 10, 20 25 C 10 40, 25 40, 25 40" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M25 40 L 22 34 M 25 40 L 29 33" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        <p 
          className="text-black text-[16px] leading-relaxed max-w-[200px]"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Have a project idea?<br/>
          just say me <strong>Hi</strong>.
        </p>
      </div>

      <div className="w-full lg:w-2/3 pr-10 lg:pr-24">
        <form className="flex flex-col gap-10">
          
          {/* فیلد Name */}
          <div className="flex items-end w-full">
            <label 
              className="bg-[#ffcbf2] border-l-[1.5px] border-black px-1.5 py-0.5 text-[18px] text-black whitespace-nowrap leading-none"
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Name
            </label>
            <input 
              type="text" 
              placeholder="Fateme Kamli" 
              className="flex-1 bg-transparent border-b-[1px] border-black outline-none px-3 pb-[2px] text-[15px] placeholder-black/60" 
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>

          <div className="flex items-end w-full">
            <label 
              className="bg-[#fce577] border-l-[1.5px] border-black px-1.5 py-0.5 text-[18px] text-black whitespace-nowrap leading-none"
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Your email
            </label>
            <input 
              type="email" 
              placeholder="iamfatemekamali@gmail.com" 
              className="flex-1 bg-transparent border-b-[1px] border-black outline-none px-3 pb-[2px] text-[15px] placeholder-black/60" 
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>

          <div className="flex items-end w-full">
            <label 
              className="bg-[#87deff] border-l-[1.5px] border-black px-1.5 py-0.5 text-[18px] text-black whitespace-nowrap leading-none"
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              About Project
            </label>
            <input 
              type="text" 
              placeholder="I want to discuss you about ......." 
              className="flex-1 bg-transparent border-b-[1px] border-black outline-none px-3 pb-[2px] text-[15px] placeholder-black/60" 
              style={{ fontFamily: '"Inter", sans-serif' }}
            />
          </div>

          <div className="flex justify-end mt-2">
            <button 
              type="button" 
              className="bg-[#0a0a0a] text-white px-8 py-3 text-[15px] font-medium hover:bg-gray-800 transition-colors" 
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Send Here
            </button>
          </div>

        </form>
      </div>
      
    </section>
  );
}