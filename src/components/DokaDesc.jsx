import React, { useState, useEffect, useRef } from "react";

const DokaDesc = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom >= 0) {
          // Component is visible in the viewport
          if (!hasAnimated && rect.top < windowHeight / 2) {
            // Trigger animation if it has not been triggered yet
            setHasAnimated(true);
          }
        } else {
          // Component is out of viewport, reset animation state
          setHasAnimated(false);
        }
      }
    };

    // Initial check
    handleScroll();

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={`bg-[#c0e4cc] py-32 px-4 md:px-20 rounded-t-[3%] mx-auto transition-all duration-1000 ease-in-out ${
        hasAnimated ? "w-full md:w-full" : "w-[70%] md:w-[70%]"
      }`}
    >
      <h1 className="font-bold text-[30px] md:text-[35px] lg:text-[50px] w-full md:w-[70%]">
        Fundraising on Doka is easy, powerful, and trusted.
      </h1>
      <br></br>
      <h3 className="text-[20px] md:text-[24px] w-full md:w-[70%]">
        Get what you need to help your fundraiser succeed on GoFundMe, whether
        you’re raising money for yourself, friends, family, or charity. With no
        fee to start, Doka is the world’s leading crowdfunding platform—from
        memorial tributes and funerals to medical emergencies and nonprofits.
        Whenever you need help, you can ask here. Still have questions?
      </h3>
      <a className="underline text-[#065f21] hover:text-[#4ac493] text-[20px] md:text-[24px] w-full md:w-[70%]">
        Learn more about how GoFundMe works.
      </a>
    </div>
  );
};

export default DokaDesc;
