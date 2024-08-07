import React from "react";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import BannerSlide from "../common/BannerSlide";

const Banner = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between p-20 md:p-10 sm:p-5 banner-bg">
      <div className="md:w-1/2 text-center md:text-left">
        <h4 className="text-blue-500 font-semibold mb-2">Lorem Ipsum</h4>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
          Design Driven Engineering{" "}
        </h1>
        <h2 className="text-3xl text-[var(--foreground)] mb-4">Solutions</h2>
        <p className="text-[var(--muted-foreground)] mb-6">
          We transform businesses of most major sectors with powerful and
          adaptable technology solutions that satisfy the needs of today.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <PrimaryBtn text="Services"/>
        </div>
      </div>
      <BannerSlide/>
    </div>
  );
};

export default Banner;
