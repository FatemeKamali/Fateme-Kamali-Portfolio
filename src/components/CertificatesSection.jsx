const certificates = [
  {
    id: 1,
    title: "Product Design, Prototyping, and Testing",
    org: "University of Maryland (via edX)",
    date: "Apr 2025 - Jul 2025",
    bgColor: "bg-[#fce577]",
    borderColor: "border-[#d8c25e]"
  },
  {
    id: 2,
    title: "User Interface Design",
    org: "Theehasnezz",
    date: "Feb 2025 - Apr 2025",
    bgColor: "bg-[#87deff]",
    borderColor: "border-[#6bc5e8]"
  },
  {
    id: 3,
    title: "Product Design & User Interface Design",
    org: "Amanj Academy",
    date: "Jun 2024 - Aug 2024 & Mar 2024 - May 2024",
    bgColor: "bg-[#ffbbf0]", 
    borderColor: "border-[#e5a0d5]"
  }
];

export default function CertificatesSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-12 pb-32 pt-16">
      
      <div className="w-full lg:w-1/4 flex flex-col items-start ml-10">
        <span 
          className="bg-[#ffcbf2] px-2 py-0.5 text-[20px] text-black inline-block"
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          Certificates
        </span>
        
        <div className="ml-[100px] mt-2 mb-4">
          <svg width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5 C 20 20, 30 5, 20 25 C 15 35, 23 40, 23 40" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M23 40 L 17 38 M 23 40 L 25 33" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        <p 
          className="text-black text-[16px] leading-relaxed max-w-[200px]"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Certified in 3 key areas of Product Design
        </p>
      </div>

      <div className="w-full lg:w-3/4 pr-10 pl-4 lg:pl-10 mt-8 lg:mt-0">
        
        <div className="relative py-12 px-8 lg:px-16 w-full max-w-[700px]">
          
          <div className="absolute top-0 left-[-30px] right-[-30px] h-[1px] bg-black"></div> {/* خط بالا */}
          <div className="absolute bottom-0 left-[-30px] right-[-30px] h-[1px] bg-black"></div> {/* خط پایین */}
          <div className="absolute left-0 top-[-30px] bottom-[-30px] w-[1px] bg-black"></div> {/* خط چپ */}
          <div className="absolute right-0 top-[-30px] bottom-[-30px] w-[1px] bg-black"></div> {/* خط راست */}

          <div className="flex flex-col gap-10">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex items-start gap-6">
                
                <div 
                  className={`w-[52px] h-[52px] shrink-0 rounded-md flex items-center justify-center border-[1px] ${cert.bgColor} ${cert.borderColor}`}
                >
                  <span 
                    className="text-[28px] text-black"
                    style={{ fontFamily: '"Handlee", cursive' }}
                  >
                    {cert.id}
                  </span>
                </div>

                <div className="flex flex-col pt-0.5" style={{ fontFamily: '"Inter", sans-serif' }}>
                  <h4 className="text-[17px] font-normal text-black mb-1">
                    {cert.title}
                  </h4>
                  <span className="text-[14px] text-gray-800 mb-0.5">
                    {cert.org}
                  </span>
                  <span className="text-[12px] text-gray-500">
                    {cert.date}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}