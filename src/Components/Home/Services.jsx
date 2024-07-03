import React from "react";
import { services } from "../../data/homeData";

const Services = () => {
  return (
<div className="bg-background text-foreground py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
        Our Services
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
        Perfect Engineering Solutions For Your Business
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {services.map((service, index) => (
        <div key={index} className="bg-card rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-card-foreground">
              {service.title}
            </h3>
          </div>
          <img
            src={service.iconUrl}
            alt={service.title}
            className="my-4 mx-auto"
          />
          <p className="text-muted-foreground">{service.description}</p>
          <button
            onClick={() => window.location.href = service.link} // Make sure 'service.link' contains the correct URL
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Visit
          </button>
          {/* <div className="mt-4 flex flex-wrap gap-2 bg-g">
            {service.tags.map((tag, idx) => (
              <p className="text-sm"><span
                key={idx}
                className="bg-muted text-muted-foreground px-2 py-1 rounded bg-gray-300"
              >
                {tag}
              </span></p>
            ))}
          </div>   */}
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Services;
