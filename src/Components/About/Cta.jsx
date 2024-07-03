import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 mb-10">
      <div
        className="relative w-full h-full flex items-center justify-center bg-cover bg-center px-8 my-8 dui-bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400')",
        }}
      >
        <div className="p-8 bg-gray-900 bg-opacity-50 text-white/75 rounded-xl shadow-lg text-center w-full max-w-full mx-2">
          <h1 className="text-4xl font-bold mb-4">Call to Action (CTA)</h1>
          <p className="text-lg mb-8">
            Jadilah bagian dari komunitas kami dan nikmati manfaat eksklusif.
          </p>
          <div className="flex gap-x-8 justify-center">
            <Link
              href="https://github.com/idugeni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-wide border border-white px-5 py-2"
            >
              WhatsApp
            </Link>
            <Link
              href="https://github.com/idugeni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-wide border border-white px-5 py-2"
            >
              Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
