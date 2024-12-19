import React from "react";

const Card = ({ image, offer, title, rating, minTime, maxTime, name, place, width }) => {
  return (
    <div className={`${width} shrink-0 rounded-[15px] shadow-lg overflow-hidden border border-gray-200 mb-3`}>
      {/* Image Section */}
      <div className="group relative w-full h-[150px]">
        <img
          className="group-hover:scale-110 duration-150 w-full h-full object-cover"
          src={`http://localhost:5000/images/${image}`}
          alt={title || "Card Image"}
        />
        {/* Offer Overlay */}
        {offer && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {offer}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-md mt-3 md:text-xl font-bold text-gray-800">{title}</h3>

        {/* Rating and Time */}
        <div className="flex items-center justify-between mt-1">
          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-3 h-3 mr-1"
            >
              <path d="M3.612 15.443c-.396.198-.847-.149-.756-.592l.83-4.73-3.523-3.356c-.33-.315-.158-.888.283-.95l4.898-.696L8.465.792a.513.513 0 0 1 .978 0l2.183 4.327 4.898.696c.441.062.613.635.283.95l-3.523 3.356.83 4.73c.091.443-.36.79-.756.592L8 13.187l-4.389 2.256z" />
            </svg>
            {rating}
          </div>

          {/* Time */}
          <div className="text-xs text-gray-500">
            {minTime}-{maxTime} min
          </div>
        </div>

        {/* Category and Place */}
        <div className="text-gray-600 mt-2 text-xs">
          <p>
            <strong>Category: </strong>
            {name}
          </p>
          <p>
            <strong>Location: </strong>
            {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
