import Arrowb from '../assets/arrow-b.svg'

export default function WhatIDoSection() {
    return (
        <section className="w-full pb-32 pt-8">

            <div className="relative mb-24 ml-10">
                <span
                    className="bg-[#ffcbf2] px-2 py-0.5 text-[20px] text-black inline-block"
                    style={{ fontFamily: '"Handlee", cursive' }}
                >
                    What i do?
                </span>

                <div className="absolute top-[32px] left-[6px]">
                    <img src={Arrowb} alt="Arrowb " />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-start ml-[-12px]">

                <div
                    className="relative  w-[377px] h-[452px] bg-[#fce577] border-[6px] border-[#EECD56] rounded shadow-sm flex flex-col justify-end p-8 rotate-[-3deg] hover:rotate-0 transition-transform duration-300 z-30"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    <div
                        className="absolute top-12 right-3 bg-[#a3e2ff] px-2 py-0.5 text-black border border-transparent z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '16px' }}
                    >
                        FigJam
                    </div>
                    <h3 className="text-[22px] font-medium leading-[1.3] text-black">
                        User Research<br />Design
                    </h3>
                </div>

                <div
                    className="relative  w-[377px] h-[452px] bg-[#87deff] border-[6px] border-[#5AB5E8] rounded shadow-sm flex flex-col justify-end p-8 rotate-[2deg] hover:rotate-0 transition-transform duration-300 z-20 md:ml-6 mt-4 md:mt-0"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    <div
                        className="absolute -top-3 right-6 bg-[#ffcbf2] px-2 py-0.5 text-black border border-transparent z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '16px' }}
                    >
                        Figma
                    </div>
                    <h3 className="text-[22px] font-medium leading-[1.3] text-black">
                        UI & Product<br />Design
                    </h3>
                </div>

                <div
                    className="relative w-[377px] h-[452px] bg-[#ffbbf0] border-[6px] border-[#F384D4] rounded shadow-sm flex flex-col justify-end p-8 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 z-10 md:ml-6 mt-4 md:mt-0"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    <div
                        className="absolute top-16 -right-6 bg-[#fce577] px-2 py-0.5 text-black border border-transparent z-40"
                        style={{ fontFamily: '"Handlee", cursive', fontSize: '16px' }}
                    >
                        Figma Prototype
                    </div>
                    <h3 className="text-[22px] font-medium leading-[1.3] text-black">
                        Prototyping &<br />Testing
                    </h3>
                </div>

            </div>
        </section>
    );
}