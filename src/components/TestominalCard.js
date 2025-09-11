import React from "react";

const TestimonialCard = ({ name, quote, image, rating }) => {
  return (
    <div className="px-4">
      <p className="text-sm md:text-base mb-12 mt-12">{quote}</p>
      <div className="flex flex-col items-center">
        <div className="flex mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
        </div>
        <h3
          className="text-4xl font-bold mt-16"
          style={{
            fontFamily: "Bebas Neue",
            fontWeight: 400,
          }}
        >
          {name}
        </h3>
        <img
          src={image}
          alt={name}
          className="w-30 h-30 mt-5 mb-16 object-cover border border-red-800"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
