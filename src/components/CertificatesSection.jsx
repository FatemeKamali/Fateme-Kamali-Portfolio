const certificates = [
  {
    id: 1,
    title: "Fundamentals of UI/UX Design",
    org: "Microsoft (via coursera)",
    date: "Apr 2025 - Jul 2025",
    bgColor: "bg-[#fce577]",
    borderColor: "border-[#d8c25e]",
    hoverColor: "hover:text-[#d8c25e]",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~QBCMFWOQITK8/CERTIFICATE_LANDING_PAGE~QBCMFWOQITK8.jpeg"
  },
  {
    id: 2,
    title: "Introduction to Web Development",
    org: "IBM (via edX)",
    date: "Feb 2025 - Apr 2025",
    bgColor: "bg-[#87deff]",
    borderColor: "border-[#6bc5e8]",
    hoverColor: "hover:text-[#6bc5e8]",
    link: "https://courses.edx.org/certificates/917536dced2c46638bcb7a2114719924"
  },
  {
    id: 3,
    title: "Product Design, Prototyping, and Testing",
    org: "University of Maryland (via edX)",
    date: "Jun 2024 - Aug 2024",
    bgColor: "bg-[#ffbbf0]",
    borderColor: "border-[#e5a0d5]",
    hoverColor: "hover:text-[#e5a0d5]",
    link: "https://courses.edx.org/certificates/137ab36538a94f46998e56b61bebf578?_gl=1*vdlkvs*_gcl_au*MTQ0OTM0MzM3Mi4xNzUzMzc0MDAz*_ga*NjA5MzUzNjg0LjE3NTMzNzQwMDM.*_ga_D3KS4KMDT0*czE3NTMzNzQwMDMkbzEkZzEkdDE3NTMzNzczOTMkajMwJGwwJGgw"
  },
  {
    id: 4,
    title: "User Interface Design",
    org: "Theehasnezz",
    date: "Mar 2024 - May 2024",
    bgColor: "bg-[#fce577]",
    borderColor: "border-[#d8c25e]",
    hoverColor: "hover:text-[#d8c25e]"
  },
  {
    id: 5,
    title: "Product Design & User Interface Design",
    org: "Amanj Academy",
    date: "Mar 2023 - Sep 2023",
    bgColor: "bg-[#87deff]",
    borderColor: "border-[#6bc5e8]",
    hoverColor: "hover:text-[#6bc5e8]"
  },
  {
    id: 6,
    title: "HTML/CSS",
    org: "Arvan Cloud",
    date: "No Date Specified",
    bgColor: "bg-[#ffbbf0]",
    borderColor: "border-[#e5a0d5]",
    hoverColor: "hover:text-[#e5a0d5]"
  },
  {
    id: 7,
    title: "ICDL",
    org: "Tehran Technical University",
    date: "No Date Specified",
    bgColor: "bg-[#fce577]",
    borderColor: "border-[#d8c25e]",
    hoverColor: "hover:text-[#d8c25e]"
  }
];

export default function CertificatesSection() {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        lg:flex-row
        gap-10
        lg:gap-12
        pb-24
        lg:pb-32
        pt-12
        lg:pt-16
        px-6
        lg:px-0
      "
    >

      {/* ================================
          LEFT SIDE
      ================================= */}

      <div
        className="
          w-full
          lg:w-1/4
          flex
          flex-col
          items-start
          ml-0
          lg:ml-10
        "
      >

        <span
          className="
            bg-[#ffcbf2]
            px-2
            py-0.5
            text-[20px]
            text-black
            inline-block
          "
          style={{ fontFamily: '"Handlee", cursive' }}
        >
          Certificates
        </span>

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
            viewBox="0 0 35 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5 C 20 20, 30 5, 20 25 C 15 35, 23 40, 23 40"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M23 40 L 17 38 M 23 40 L 25 33"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <p
          className="
            text-black
            text-[16px]
            leading-relaxed
            max-w-[220px]
          "
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Certified in multiple key areas of Design and Development
        </p>

      </div>


      {/* ================================
          RIGHT SIDE
      ================================= */}

      <div
        className="
          w-full
          lg:w-3/4
          pl-0
          lg:pl-10
          pr-0
          lg:pr-10
          mt-8
          lg:mt-8
        "
      >

        {/* قاب اصلی */}
        <div
          className="
            relative
            w-full
            max-w-[700px]

            mx-auto
            lg:mx-0

            py-10
            lg:py-12

            px-5
            sm:px-8
            lg:px-16
          "
        >

          {/* ============================
              TOP LINE
          ============================= */}

          <div
            className="
              absolute
              top-0
              left-[-20px]
              right-[-20px]
              sm:left-[-25px]
              sm:right-[-25px]
              lg:left-[-30px]
              lg:right-[-30px]
              h-[1.5px]
              bg-black
            "
          />


          {/* ============================
              BOTTOM LINE
          ============================= */}

          <div
            className="
              absolute
              bottom-0
              left-[-20px]
              right-[-20px]
              sm:left-[-25px]
              sm:right-[-25px]
              lg:left-[-30px]
              lg:right-[-30px]
              h-[1.5px]
              bg-black
            "
          />


          {/* ============================
              LEFT LINE
          ============================= */}

          <div
            className="
              absolute
              left-0
              top-[-20px]
              bottom-[-20px]
              sm:top-[-25px]
              sm:bottom-[-25px]
              lg:top-[-30px]
              lg:bottom-[-30px]
              w-[1.5px]
              bg-black
            "
          />


          {/* ============================
              RIGHT LINE
          ============================= */}

          <div
            className="
              absolute
              right-0
              top-[-20px]
              bottom-[-20px]
              sm:top-[-25px]
              sm:bottom-[-25px]
              lg:top-[-30px]
              lg:bottom-[-30px]
              w-[1.5px]
              bg-black
            "
          />


          {/* ============================
              CERTIFICATES
          ============================= */}

          <div className="flex flex-col gap-8 sm:gap-10">

            {certificates.map((cert) => (

              <div
                key={cert.id}
                className="
                  flex
                  items-start
                  gap-4
                  sm:gap-5
                  lg:gap-6
                  min-w-0
                "
              >

                {/* Number */}
                <div
                  className={`
                    w-[44px]
                    h-[44px]
                    sm:w-[48px]
                    sm:h-[48px]
                    lg:w-[52px]
                    lg:h-[52px]

                    shrink-0

                    rounded-md

                    flex
                    items-center
                    justify-center

                    border-[1px]

                    ${cert.bgColor}
                    ${cert.borderColor}
                  `}
                >
                  <span
                    className="
                      text-[24px]
                      sm:text-[26px]
                      lg:text-[28px]
                      text-black
                    "
                    style={{ fontFamily: '"Handlee", cursive' }}
                  >
                    {cert.id}
                  </span>
                </div>


                {/* Text */}
                <div
                  className="
                    flex
                    flex-col
                    pt-0.5
                    min-w-0
                  "
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >

                  <h4
                    className="
                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]
                      font-normal
                      text-black
                      mb-1
                      leading-snug
                    "
                  >

                    {cert.link ? (

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          hover:underline
                          transition-colors
                          inline-flex
                          items-start
                          gap-1
                          ${cert.hoverColor}
                        `}
                      >

                        <span className="break-words">
                          {cert.title}
                        </span>

                        <span className="text-[14px] shrink-0">
                          ↗
                        </span>

                      </a>

                    ) : (

                      cert.title

                    )}

                  </h4>

                  <span
                    className="
                      text-[13px]
                      sm:text-[14px]
                      text-gray-800
                      mb-0.5
                      leading-snug
                    "
                  >
                    {cert.org}
                  </span>

                  {cert.date !== "No Date Specified" && (

                    <span
                      className="
                        text-[11px]
                        sm:text-[12px]
                        text-gray-500
                      "
                    >
                      {cert.date}
                    </span>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}