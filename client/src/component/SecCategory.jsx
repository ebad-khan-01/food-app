import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

function SecCategory() {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleItems = 4; // Number of items visible at a time

  const handleRight = () => {
    if (currentSlide < data.length - visibleItems) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Header Section */}
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold capitalize">
          Top restaurant chains in Karachi
        </div>

        {/* Navigation Arrows */}
        <div className="flex">
          <div
            onClick={handleLeft}
            className="flex items-center justify-center cursor-pointer mx-2 rounded-full bg-gray-200 w-[30px] h-[30px]"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={handleRight}
            className="flex items-center justify-center cursor-pointer mx-2 rounded-full bg-gray-200 w-[30px] h-[30px]"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
          }}
        >
          {data.map((elem, i) => (
            <Card key={i} width="w-full md:w-[273px]" {...elem} />
          ))}
        </div>
      </div>

      {/* Separator */}
      <hr className="my-6 border-1" />
    </div>
  );
}

export default SecCategory;
