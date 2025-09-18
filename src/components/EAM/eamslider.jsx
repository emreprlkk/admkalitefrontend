import { useState } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
const Slider = () => {
  const items = [
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg">
      {/* Görsel */}
      <img
        src={items[current]}
        alt="slider"
        className="w-full h-64 object-cover transition-all duration-500"
      />

      {/* Sol buton */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2   hover:bg-red text-blue-800 p-2 rounded-full shadow"
      >
        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 15 }}/>
      </button>

      {/* Sağ buton */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 -translate-y-1/2  hover:bg-white text-amber-800  rounded-full shadow"
      >
      <ArrowForwardIosRoundedIcon  sx={{ fontSize: 15 }}/>
      </button>

      {/* Dots */}
      <div className="absolute  bg-amber-700 bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={ `w-3 h-3 rounded-full ${
              index === current ? "bg-red" : "bg-yellow"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
