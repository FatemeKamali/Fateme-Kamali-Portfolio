const experiences = [
    {
        id: 1,
        title: "Boomvand & Jalink",
        tag: "PD Intern",
        color: "#f368e0", 
        cursorRotate: "rotate-[20deg]"
    },
    {
        id: 2,
        title: "RCS",
        tag: "Dashboard",
        color: "#45aaf2", 
        cursorRotate: "rotate-[20deg]"
    },
    {
        id: 3,
        title: "TheyPaid",
        tag: "Crypto",
        color: "#e1b12c", 
        cursorRotate: "rotate-[20deg]"
    },
    {
        id: 4,
        title: "Joblin",
        tag: "Community",
        color: "#4cd137",
        cursorRotate: "rotate-[20deg]"
    },
    {
        id: 5,
        title: "Doctor Hamrah",
        tag: "Team Work",
        color: "#45aaf2",
        cursorRotate: "rotate-[20deg]"
    },
    {
        id: 6,
        title: "100",
        tag: "UI Design",
        color: "#f368e0", 
        cursorRotate: "rotate-[20deg]"
    }
];

const ColoredCursor = ({ color, rotateClass }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className={`drop-shadow-sm ${rotateClass}`}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.5 2.5L20.5 9L12.5 12.5L9 20.5L5.5 2.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

export default function WorkExperienceSection() {
    return (
        <section className="w-full flex flex-col lg:flex-row gap-12 pb-32 pt-16">

            <div className="w-full lg:w-1/4 flex flex-col items-start ml-10">
                <span
                    className="bg-[#ffcbf2] px-2 py-0.5 text-[20px] text-black inline-block"
                    style={{ fontFamily: '"Handlee", cursive' }}
                >
                    Work Experience
                </span>

                {/* فلش نقاشی شده */}
                <div className="ml-16 mt-4">
                    <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2 C16 10 24 16 12 22 C6 26 2 18 10 14 C18 10 22 30 22 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        <path d="M22 30 L16 26 M22 30 L24 22" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                </div>

                <p
                    className="mt-6 text-black text-[15px] leading-relaxed max-w-[160px]"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Have been designing since my past 1 years
                </p>
            </div>

            <div className="w-full lg:w-3/4 pr-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                    {experiences.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border-[1.5px] border-black p-3 flex flex-col rounded-sm"
                        >
                            <div className="w-full aspect-[4/3] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden mb-4">
                                <span className="text-gray-300 font-medium font-sans">Image Area</span>
                            </div>

                            <div className="flex justify-between items-end px-1 pb-1">

                                <h4
                                    className="text-[19px] underline decoration-black decoration-[1.5px] underline-offset-[3px] text-black"
                                    style={{ fontFamily: '"Handlee", cursive' }}
                                >
                                    {item.title}
                                </h4>

                                <div className="flex items-center gap-1.5 mb-1">
                                    <div className='-mt-10 -mr-2'>
                                        <ColoredCursor color={item.color} rotateClass={item.cursorRotate} />

                                    </div>

                                    <span
                                        className="text-white text-[12px] font-medium px-3.5 py-1 rounded-full rounded-tl-none border-[1px] border-black/10 shadow-sm"
                                        style={{
                                            backgroundColor: item.color,
                                            fontFamily: '"Inter", sans-serif'
                                        }}
                                    >
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}