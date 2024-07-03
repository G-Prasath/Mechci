import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CountUp from "react-countup";
import { slides } from "../../data/homeData";

const About = () => {
  const [facts, setFacts] = useState([
    { label: "Years of Experience", count: 0, end: 30 },
    { label: "Projects completed", count: 0, end: 1100 },
    { label: "Awards achieved", count: 0, end: 240 },
    { label: "Satisfied clients in 24 countries", count: 0, end: 180 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFacts((prevFacts) =>
        prevFacts.map((fact) => ({
          ...fact,
          count: fact.count < fact.end ? fact.count + 1 : fact.count,
        }))
      );
    }, 1000); // Update interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-20 max-md:p-0 max-lg:p-10">
      <div className="bg-gradient-to-r from-black to-blue-700 text-white p-8 m-10 max-md:m-5 rounded-lg">
        <div className="relative overflow-hidden w-full">
          <Splide
  options={{
    type: "loop",
    rewind: true,
    width: "100%",
    gap: "1rem",
    pagination: false,
    autoplay: true,
    perPage: 8,
    arrows: false,
    interval: 3000,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    breakpoints: {
      1024: {
        perPage: 4, // Number of slides to show on tablet screens
      },
      640: {
        perPage: 2, // Number of slides to show on mobile screens
      },
    },
  }}
          >
            {slides.map((slide, index) => (
              <SplideSlide key={index}>
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="h-15 mx-4"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <blockquote className="text-2xl lg:text-3xl font-semibold mb-4">
              <cite className="block text-2xl">
                {" "}
                “Engineering design excels when it harmonizes innovation with
                human needs”
              </cite>
            </blockquote>
            <cite className="block text-lg font-light">Patricia Cross</cite>
          </div>
          <div className="w-full lg:w-1/2 text-justify lg:text-left mt-8 lg:mt-0">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, pro liber nominavi conclusionemque eu.
              Mutat virtute sea id, case omittantur ius ad. Et nobis suavitate
              vix. Saepe soleat honestatis ne nec, has amet decore viderer ex,
              ei nec tritani nostrud epicuri. Ad sed errem tritani perpetua, usu
              no nullam admodum.Lorem ipsum dolor sit amet, pro liber nominavi
              conclusionemque eu. Mutat virtute sea id, case omittantur ius ad.
              Et nobis suavitate vix. Saepe soleat honestatis ne nec, has amet
              decore viderer ex, ei nec tritani nostrud epicuri. Ad sed errem
              tritani perpetua, usu no nullam admodum.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, pro liber nominavi conclusionemque eu.
              Mutat virtute sea id, case omittantur ius ad. Et nobis suavitate
              vix. Saepe soleat honestatis ne nec, has amet decore viderer ex,
              ei nec tritani nostrud epicuri. Ad sed errem tritani perpetua, usu
              no nullam admodum.Lorem ipsum dolor sit amet, pro liber nominavi
              conclusionemque eu. Mutat virtute sea id, case omittantur ius ad.
              Et nobis suavitate vix. Saepe soleat honestatis ne nec, has amet
              decore viderer ex, ei nec tritani nostrud epicuri. Ad sed errem
              tritani perpetua, usu no nullam admodum.Lorem ipsum dolor sit
              amet, pro liber nominavi conclusionemque eu. Mutat virtute sea id,
              case omittantur ius ad. Et nobis suavitate vix. Saepe soleat
              honestatis ne nec, has amet decore viderer ex, ei nec tritani
              nostrud epicuri. Ad sed errem tritani perpetua, usu no nullam
              admodum.
            </p>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-700">
              More About Us
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-10 pt-10 text-center">
          {facts.map((fact, index) => (
            <div key={index} className="w-1/2 md:w-1/4 mb-4">
              <CountUp
                end={fact.end}
                duration={5}
                className="text-2xl font-bold"
              />
              <p>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
