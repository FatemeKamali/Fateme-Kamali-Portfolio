import React from 'react';

// Images
import imgDoctorHamrah from "../assets/Doctor Hamrah-Cover.jpg";
import img100 from "../assets/100-Cover.jpg";
import imgJoblin from "../assets/Joblin-Cover.jpg";
import imgRCS from "../assets/RCS-Cover.jpg";
import imgTheypaid from "../assets/TheyPaid-Cover.jpg";
import imgExistenceOffice from "../assets/ExistenceOffice-Cover.jpg";
import imgJalink from "../assets/Jalink-Cover.jpg";
import imgChallenginno from "../assets/Challenginno-Cover.jpg";
import imgBoomVand from "../assets/BoomVand-Cover.jpg";
import imgLavand from "../assets/Lavand-Cover.jpg";


const experiences = [
    {
        id: 1,
        title: "Lavand",
        tag: "UI/UX & Logo Designer",
        color: "#f368e0",
        cursorRotate: "rotate-[20deg]",
        image: imgLavand,
        link: "http://lavand.shop/"
    },
    {
        id: 2,
        title: "Challenginno",
        tag: "UI/UX Designer",
        color: "#45aaf2",
        cursorRotate: "rotate-[20deg]",
        image: imgChallenginno,
        link: "https://drive.google.com/drive/folders/1cTBaqJXy38TuAchNWhOj6W4wR9HeH57p?usp=sharing"
    },
    {
        id: 3,
        title: "Existence Office",
        tag: "Product Designer",
        color: "#e1b12c",
        cursorRotate: "rotate-[20deg]",
        image: imgExistenceOffice,
        link: "https://existenceoffice.com/"
    },
    {
        id: 4,
        title: "Theypaid",
        tag: "Product Designer",
        color: "#4cd137",
        cursorRotate: "rotate-[20deg]",
        image: imgTheypaid,
        link: "https://drive.google.com/drive/folders/1w17ODc4Mlrq8VWI7bVgioaGl-6hlxVqy?usp=sharing"
    },
    {
        id: 5,
        title: "Boomvand",
        tag: "PD Intern",
        color: "#f368e0",
        cursorRotate: "rotate-[20deg]",
        image: imgBoomVand,
        link: "https://www.boomvand.com/"
    },
    {
        id: 6,
        title: "Jalink",
        tag: "Product Designer",
        color: "#45aaf2",
        cursorRotate: "rotate-[20deg]",
        image: imgJalink,
        link: "https://jaaliink.ir/"
    },
    {
        id: 7,
        title: "RCS",
        tag: "Product Designer",
        color: "#e1b12c",
        cursorRotate: "rotate-[20deg]",
        image: imgRCS,
        link: "https://www.behance.net/gallery/233390411/RCS-Case-Study-Admin-Dashboard-Redesign"
    },
    {
        id: 8,
        title: "Joblin",
        tag: "UI/UX Designer",
        color: "#4cd137",
        cursorRotate: "rotate-[20deg]",
        image: imgJoblin,
        link: "https://www.figma.com/community/file/1505990917810847202/joblin-hiring-job-finder-platform"
    },
    {
        id: 9,
        title: "Doctor Hamrah",
        tag: "Product Designer",
        color: "#f368e0",
        cursorRotate: "rotate-[20deg]",
        image: imgDoctorHamrah,
        link: "https://www.behance.net/gallery/216525371/UIUX-Case-Study-Online-Doctor-Appointment-App"
    },
    {
        id: 10,
        title: "100",
        tag: "UI/UX Designer",
        color: "#45aaf2",
        cursorRotate: "rotate-[20deg]",
        image: img100,
        link: "https://www.behance.net/gallery/215228363/UIUX-Design-100-Financial-App"
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
        <section className="w-full flex flex-col lg:flex-row gap-12 pb-32 pt-16 px-5 sm:px-8 lg:px-0">

            {/* =====================================================
                LEFT COLUMN
            ====================================================== */}
            <div
                className="
                    w-full
                    lg:w-1/4
                    flex flex-col
                    items-start
                    ml-0
                    lg:ml-10
                "
            >

                {/* Title */}
                <span
                    className="
                        bg-[#ffcbf2]
                        px-2 py-0.5
                        text-[20px]
                        text-black
                        inline-block
                    "
                    style={{ fontFamily: '"Handlee", cursive' }}
                >
                    Work Experience
                </span>


                {/* Arrow */}
                <div
                    className="
                        ml-[70px]
                        sm:ml-[85px]
                        lg:ml-[100px]
                        mt-2
                        mb-4
                    "
                >
                    <svg
                        width="35"
                        height="45"
                        viewBox="0 0 45 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 5 C 15 25, 40 15, 30 5 C 20 -5, 10 15, 20 30 C 25 40, 30 50, 30 50"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            fill="none"
                        />

                        <path
                            d="M22 43 L30 50 L35 41"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </div>


                {/* Description */}
                <p
                    className="
                        text-black
                        text-[16px]
                        leading-relaxed
                        max-w-[220px]
                        sm:max-w-[250px]
                    "
                    style={{ fontFamily: '"Inter", sans-serif' }}
                >
                    Have been designing<br />
                    for over 2 years
                </p>

            </div>


            {/* =====================================================
                RIGHT COLUMN / CARDS
            ====================================================== */}
            <div
                className="
                    w-full
                    lg:w-3/4
                    pr-0
                    lg:pr-10
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-x-4
                        gap-y-6
                        lg:gap-x-6
                        lg:gap-y-6
                    "
                >

                    {experiences.map((item) => (

                        <div
                            key={item.id}
                            className="
                                w-full
                                bg-white
                                border-[1.5px]
                                border-black
                                p-3
                                flex
                                flex-col
                                rounded-sm
                                hover:shadow-md
                                transition-shadow
                            "
                        >

                            {/* ================= IMAGE ================= */}
                            <div
                                className="
                                    w-full
                                    aspect-[4/3]
                                    bg-gray-50
                                    border
                                    border-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    relative
                                    overflow-hidden
                                    mb-4
                                    group
                                "
                            >

                                {item.link ? (

                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-full block"
                                    >

                                        {item.image ? (

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    object-top
                                                    group-hover:scale-105
                                                    transition-transform
                                                    duration-300
                                                "
                                            />

                                        ) : (

                                            <span
                                                className="
                                                    text-gray-300
                                                    font-medium
                                                    font-sans
                                                    flex
                                                    items-center
                                                    justify-center
                                                    h-full
                                                    w-full
                                                "
                                            >
                                                Image Area
                                            </span>

                                        )}

                                    </a>

                                ) : (

                                    <>
                                        {item.image ? (

                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    object-top
                                                "
                                            />

                                        ) : (

                                            <span
                                                className="
                                                    text-gray-300
                                                    font-medium
                                                    font-sans
                                                "
                                            >
                                                Image Area
                                            </span>

                                        )}
                                    </>

                                )}

                            </div>


                            {/* ================= CARD FOOTER ================= */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    justify-between
                                    items-start
                                    sm:items-end
                                    gap-3
                                    px-1
                                    pb-1
                                "
                            >

                                {/* Project title */}
                                <h4
                                    className="
                                        text-[18px]
                                        sm:text-[19px]
                                        underline
                                        decoration-black
                                        decoration-[1.5px]
                                        underline-offset-[3px]
                                        text-black
                                    "
                                    style={{ fontFamily: '"Handlee", cursive' }}
                                >

                                    {item.link ? (

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                hover:text-gray-600
                                                transition-colors
                                                inline-flex
                                                items-center
                                                gap-1
                                            "
                                        >

                                            {item.title}

                                            <span
                                                className="
                                                    text-[14px]
                                                    no-underline
                                                "
                                            >
                                                ↗
                                            </span>

                                        </a>

                                    ) : (

                                        item.title

                                    )}

                                </h4>


                                {/* ================= TAG ================= */}
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        self-end
                                        sm:self-auto
                                    "
                                >

                                    {/* Cursor */}
                                    <div
                                        className="
                                            -mt-8
                                            sm:-mt-9
                                            lg:-mt-10
                                            -mr-2
                                            z-10
                                            shrink-0
                                        "
                                    >
                                        <ColoredCursor
                                            color={item.color}
                                            rotateClass={item.cursorRotate}
                                        />
                                    </div>


                                    {/* Tag */}
                                    <span
                                        className="
                                            text-white
                                            text-[11px]
                                            sm:text-[12px]
                                            font-medium
                                            px-3
                                            sm:px-3.5
                                            py-1
                                            rounded-full
                                            rounded-tl-none
                                            border-[1px]
                                            border-black/10
                                            shadow-sm
                                            whitespace-nowrap
                                        "
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