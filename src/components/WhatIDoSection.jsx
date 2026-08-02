import Arrowb from '../assets/arrow-b.svg'
import Pen from '../assets/pen.png'
import Eye from '../assets/eye.png' 
import Shine from '../assets/shine.png' 

export default function WhatIDoSection() {
    return (
        <section className="w-full pb-24 pt-8"> 

            <div className="relative mb-16 ml-10">
                <span
                    className="bg-[#ffcbf2] px-2 py-0.5 text-[20px] text-black inline-block"
                    style={{ fontFamily: '"Handlee", cursive' }}
                >
                    What i do?
                </span>

                <div className="absolute top-[32px] left-[6px]">
                    <img src={Arrowb} alt="Arrowb" />
                </div>
            </div>

            {/* پدینگ‌ها متعادل شد: 
                lg:pl-24 (سمت چپ) برای جا دادن گوشه کارت زرد
                lg:pr-32 (سمت راست) برای جا دادن لیبل کارت صورتی
                py-10 برای فضای بالا و پایین چرخش‌ها
            */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 py-10 lg:pl-24 lg:pr-32">

                {/* کارت زرد */}
                <div
                    className="relative shrink-0 w-[377px] h-[452px] bg-[#fce577] border-[3px] border-[#EECD56] rounded-xl flex flex-col justify-end p-10 rotate-[-6deg] hover:rotate-0 transition-transform duration-300 z-10"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    {/* لیبل FigJam */}
                    <div
                        className="absolute top-[60px] right-[24px] bg-[#a3e2ff] px-3 py-1 text-black z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '18px' }}
                    >
                        FigJam
                    </div>
                    <img src={Pen} alt="Pen Icon" className="w-[50px] h-[50px] object-contain mb-6" />
                    <h3 className="text-[32px] font-medium leading-[1.2] tracking-tight text-black">
                        User Research<br />Design
                    </h3>
                </div>

                {/* کارت آبی */}
                <div
                    className="relative shrink-0 w-[377px] h-[452px] bg-[#87deff] border-[3px] border-[#5AB5E8] rounded-xl flex flex-col justify-end p-10 rotate-[2deg] hover:rotate-0 transition-transform duration-300 z-30"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    {/* لیبل Figma */}
                    <div
                        className="absolute -top-[14px] right-[40px] bg-[#ffcbf2] px-3 py-1 text-black z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '18px' }}
                    >
                        Figma
                    </div>
                    <img src={Eye} alt="Eye Icon" className="w-[50px] h-[50px] object-contain mb-6" />
                    <h3 className="text-[32px] font-medium leading-[1.2] tracking-tight text-black">
                        UI & Product<br />Design
                    </h3>
                </div>

                {/* کارت صورتی */}
                <div
                    className="relative shrink-0 w-[377px] h-[452px] bg-[#ffbbf0] border-[3px] border-[#F384D4] rounded-xl flex flex-col justify-end p-10 rotate-[5deg] hover:rotate-0 transition-transform duration-300 z-20"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    {/* لیبل Figma Prototype */}
                    <div
                        className="absolute top-[100px] -right-[60px] bg-[#fce577] px-3 py-1 text-black z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '18px' }}
                    >
                        Figma Prototype
                    </div>
                    <img src={Shine} alt="Shine Icon" className="w-[50px] h-[50px] object-contain mb-6" />
                    <h3 className="text-[32px] font-medium leading-[1.2] tracking-tight text-black">
                        Prototyping &<br />Testing
                    </h3>
                </div>

            </div>
        </section>
    );
}