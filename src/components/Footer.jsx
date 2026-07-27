import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t-[1.5px] border-black py-16 px-10 md:px-24 flex flex-col md:flex-row justify-between items-center bg-transparent z-10 relative">
      
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
        </svg>
        <span className="text-[24px] font-medium text-black" style={{ fontFamily: '"Handlee", cursive' }}>
          Fateme Kamali
        </span>
      </div>

      <div className="flex gap-8 mt-8 md:mt-0">
        <a 
          href="#" 
          className="bg-black text-white px-2 py-0.5 text-[18px] hover:bg-gray-800 transition-colors"
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          LinkedIn
        </a>
        <a 
          href="#" 
          className="bg-black text-white px-2 py-0.5 text-[18px] hover:bg-gray-800 transition-colors"
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          Instagram
        </a>
        <a 
          href="#" 
          className="bg-black text-white px-2 py-0.5 text-[18px] hover:bg-gray-800 transition-colors"
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          Telegram
        </a>
      </div>

    </footer>
  );
}