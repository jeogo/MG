// components/ImageGallery.tsx
import React from "react";

const images = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
  "/images/product4.jpg",
  "/images/product5.jpg",
  "/images/product6.jpg",
];

const ImageGallery: React.FC = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        {/* First column */}
        <div className="flex flex-col space-y-4">
          {images.slice(0, 3).map((src, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[300px] overflow-hidden flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Second column */}
        <div className="flex flex-col space-y-4">
          {images.slice(3, 6).map((src, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[300px] overflow-hidden flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 4}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
