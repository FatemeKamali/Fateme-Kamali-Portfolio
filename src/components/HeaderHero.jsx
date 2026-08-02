import React from "react";
import Avatar from "../assets/fateme.png";
import Arrow from "../assets/arrow.svg";
// ۱. فایل رزومه رو اینجا ایمپورت کن
import CV from "../assets/CV-Fateme Kamali-PD.pdf";

export default function HeaderHero() {
  const scrollToHire = (e) => {
    e.preventDefault();
    const target = document.getElementById("hire");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;

    const duration = 1500;
    let start = null;

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="w-full px-6 md:px-10 pb-16 md:pb-20 overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10 md:mb-24">
        <div className="flex items-center gap-2 md:gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 6.627 12 12 0Z" />
          </svg>

          <span
            className="text-[18px] md:text-[22px] font-medium"
            style={{ fontFamily: '"Handlee", cursive' }}
          >
            Fateme Kamali
          </span>
        </div>

        <div
          className="flex items-center gap-5 md:gap-8 text-[14px] md:text-[15px]"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {/* ۲. اینجا href رو برابر با متغیری که بالا ایمپورت کردیم قرار دادیم */}
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            CV
          </a>

          <a
            href="#hire"
            onClick={scrollToHire}
            style={{
              background:
                "linear-gradient(to top, #ffcbf2 40%, transparent 40%)",
            }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-0"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {/* Left (Text) - با order-2 در موبایل می‌رود پایین و با lg:order-1 در دسکتاپ می‌آید سمت چپ */}
        <div className="w-full lg:max-w-[560px] pt-0 lg:pt-4 flex flex-col items-start text-left order-2 lg:order-1">
          <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] md:leading-[1.05] tracking-[-0.03em] text-black mb-4 md:mb-6">
            I{" "}
            <span
              className="px-1"
              style={{
                background:
                  "linear-gradient(to top, #ffcbf2 48%, transparent 48%)",
              }}
            >
              design
            </span>{" "}
            user-centered
            <br />
            digital products
          </h1>

          <p className="text-[15px] md:text-[16px] leading-[1.6] text-[#3c3c3c] max-w-full md:max-w-[500px] mb-8">
            I'll take your idea through research, design, and prototyping to
            deliver a fully-realized and validated concept, ready for
            development.
          </p>

          <button
            onClick={scrollToHire}
            className="bg-black text-white px-8 py-3.5 rounded-sm text-[15px] font-medium hover:bg-neutral-800 transition-colors cursor-pointer w-full sm:w-auto text-center"
          >
            Hire me
          </button>
        </div>

        {/* Right (Image) - با order-1 در موبایل می‌آید بالا و با lg:order-2 در دسکتاپ می‌رود سمت راست */}
        <div className="flex items-center justify-center gap-3 md:gap-5 w-full lg:w-auto scale-90 md:scale-100 order-1 lg:order-2 lg:mt-6">
          <img
            src={Avatar}
            alt="Fateme Kamali"
            className="w-[140px] md:w-[185px] h-auto object-contain"
          />

          <div className="mt-4 md:mt-8">
            <img
              src={Arrow}
              alt="Arrow"
              className="w-[40px] md:w-auto h-auto object-contain"
            />
          </div>

          <div className="bg-[#ffcbf2] px-2 py-0.5 rotate-[-4deg] mb-2 shadow-sm">
            <span
              className="text-[16px] md:text-[20px] text-black whitespace-nowrap"
              style={{ fontFamily: '"Handlee", cursive' }}
            >
              Fateme
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}