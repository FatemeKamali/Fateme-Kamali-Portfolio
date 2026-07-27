import Avatar from '../assets/fateme.jpg'
import Arrow from '../assets/arrow.svg'


export default function HeaderHero() {
  return (
    <div className="w-full pl-10 pr-6 pb-20">
      
      <nav className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
          </svg>
          <span className="text-[22px] font-medium" style={{ fontFamily: '"Handlee", cursive' }}>
            Fateme Kamali
          </span>
        </div>

        <div className="flex gap-8 text-[15px] text-black" style={{ fontFamily: '"Inter", sans-serif' }}>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
          <a href="#hire" className="relative group">
            <span className="relative z-10">Hire Me</span>
            <span className="absolute bottom-0.5 left-0 w-full h-[8px] bg-[#ffcbf2] -z-10 group-hover:h-[12px] transition-all"></span>
          </a>
        </div>
      </nav>

      <main className="flex justify-between items-start" style={{ fontFamily: '"Inter", sans-serif' }}>
        
        <div className="max-w-[550px] pt-4">
          <h1 className="text-[52px] font-bold leading-[1.1] mb-6 tracking-tight text-black">
            I <span className="relative inline-block">
              <span className="relative z-10">design</span>
              <span className="absolute bottom-2 left-[-4px] right-[-4px] h-[18px] bg-[#ffcbf2] -z-10"></span>
            </span> user-centered<br />
            digital products
          </h1>
          
          <p className="text-gray-800 text-[16px] leading-[1.6] mb-8 max-w-[500px]">
            I'll take your idea through research, design, and prototyping to deliver a fully-realized and validated concept, ready for development.
          </p>
          
          <button className="bg-[#0a0a0a] text-white px-8 py-3.5 text-[15px] font-medium rounded-sm hover:bg-gray-800 transition-colors">
            Hire me
          </button>
        </div>

        <div className="relative mr-16 mt-6">
          <img 
            src={Avatar}
            alt="Fateme Kamali Illustration" 
            className="w-[180px] h-auto object-contain"
          />

          <div className="absolute top-[45%] -right-[120px]">
         <img src={Arrow} alt=""/>
          </div>

          <div className="absolute top-[40%] -right-[230px] bg-[#ffcbf2] px-4 py-2 rotate-[-4deg]">
            <span className="text-2xl text-black" style={{ fontFamily: '"Handlee", cursive' }}>
              Fateme
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}