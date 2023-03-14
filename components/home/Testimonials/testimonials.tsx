/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Testimonial = () => {
  return (
    <div className="min-h-screen pt-[3%]">
      <div className=" flex justify-center">
        <h1 className="text-green-400 font-bold text-5xl">Testimonial</h1>
      </div>

      <div className="flex justify-center items-center my-12">
        <img
          src="/LandingPage/Testimonials/testimonials.svg"
          className=""
          alt="Hello"
        />
      </div>
    </div>
  );
};

export default Testimonial;
