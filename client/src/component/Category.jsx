import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Category() {
  const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Number of visible items
  const visibleItems = 8;

  const nextSlide = () => {
    if (slide < categories.length - visibleItems) {
      setSlide(slide + 3);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 3);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Header Section */}
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold capitalize">
          What's on your mind
        </div>

        {/* Navigation Arrows */}
        <div className="flex">
          <div
            onClick={prevSlide}
            className="flex items-center justify-center cursor-pointer mx-2 rounded-full bg-gray-200 w-[30px] h-[30px]"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex items-center justify-center cursor-pointer mx-2 rounded-full bg-gray-200 w-[30px] h-[30px]"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${slide * (100 / visibleItems)}%)`,
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[150px] shrink-0 px-2"
            >
              <img
                src={`http://localhost:5000/images/${category.image}`}
                alt="Category"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-1 " />
    </div>
  );
}

export default Category;
