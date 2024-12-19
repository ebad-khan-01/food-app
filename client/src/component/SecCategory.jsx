import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

function SecCategory() {
  const [data, setData] = useState([]);
  const [newSlide, setNewSlide] = useState(0);

  const DataFromApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    DataFromApi();
  }, []);

  const visibleProduct = 4;

  const handleRight = () => {
    if (newSlide < data.length - visibleProduct) {
      setNewSlide(newSlide + 3);
    }
  };

  const handleLeft = () => {
    if (newSlide > 0) {
      setNewSlide(newSlide - 3);
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
      <div className="flex overflow-hidden gap-5">
        {data.slice(newSlide, newSlide + visibleProduct).map((elem, i) => (
          <Card width="w-full md:w-[273px]" {...elem} key={i} />
        ))}
      </div>

      {/* Separator */}
      <hr className="my-6 border-1" />
    </div>
  );
}

export default SecCategory;
