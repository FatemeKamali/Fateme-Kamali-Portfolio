import React from 'react';

export default function ContactSection() {
  return (
    <section
      id="hire"
      className="
        w-full
        flex
        flex-col
        lg:flex-row
        gap-10
        lg:gap-12
        pb-20
        lg:pb-24
        pt-12
        lg:pt-16
        border-t-[1.5px]
        border-black
        mt-12
        lg:mt-16
        px-6
        sm:px-8
        lg:px-0
      "
    >

      {/* =====================================================
          ستون سمت چپ
      ====================================================== */}
      <div
        className="
          w-full
          lg:w-1/3
          flex
          flex-col
          items-start
          ml-0
          lg:ml-10
        "
      >

        {/* Title */}
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
          Contact here
        </span>


        {/* Arrow */}
        <div
          className="
            ml-[70px]
            sm:ml-[85px]
            lg:ml-[100px]
            mt-3
            lg:mt-4
            mb-4
            lg:mb-6
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
              d="M5 5 C 15 15, 30 10, 20 25 C 10 40, 25 40, 25 40"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M25 40 L 22 34 M 25 40 L 29 33"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
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
          Have a project idea?<br />
          just say me <strong>Hi</strong>.
        </p>

      </div>


      {/* =====================================================
          ستون سمت راست
      ====================================================== */}
      <div
        className="
          w-full
          lg:w-2/3
          pr-0
          lg:pr-24
          flex
          flex-col
          justify-center
          mt-2
          lg:mt-0
        "
      >

        <div className="flex flex-col gap-6 sm:gap-8 bg-transparent">


          {/* =================================================
              Logo + Name
          ================================================== */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 sm:w-9 sm:h-9"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>

            <span
              className="
                text-[24px]
                sm:text-[28px]
                font-medium
                text-black
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Fateme Kamali
            </span>

          </div>


          {/* =================================================
              Social Buttons
          ================================================== */}
          <div
            className="
              flex
              flex-wrap
              gap-3
              sm:gap-4
              max-w-full
            "
          >

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iamfatemekamali@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[#87deff]
                text-black
                border-[1.5px]
                border-black
                px-4
                py-1.5
                text-[17px]
                sm:text-[18px]
                hover:bg-[#6bc5e8]
                transition-colors
                whitespace-nowrap
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Email Me
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/iam-fateme-kamali/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-black
                text-white
                px-4
                py-1.5
                text-[17px]
                sm:text-[18px]
                hover:bg-gray-800
                transition-colors
                whitespace-nowrap
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              LinkedIn
            </a>


            {/* Behance */}
            <a
              href="https://www.behance.net/fatemekamali1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-black
                text-white
                px-4
                py-1.5
                text-[17px]
                sm:text-[18px]
                hover:bg-gray-800
                transition-colors
                whitespace-nowrap
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Behance
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/thefatemekamali/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-black
                text-white
                px-4
                py-1.5
                text-[17px]
                sm:text-[18px]
                hover:bg-gray-800
                transition-colors
                whitespace-nowrap
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Instagram
            </a>


            {/* Telegram */}
            <a
              href="https://t.me/thefatemekamaliChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-black
                text-white
                px-4
                py-1.5
                text-[17px]
                sm:text-[18px]
                hover:bg-gray-800
                transition-colors
                whitespace-nowrap
              "
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Telegram
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}