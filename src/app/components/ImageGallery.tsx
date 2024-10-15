import React from "react";
import Image from "next/image";

// Import images
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import product6 from "../images/product6.jpg";

const images = [product1, product2, product3, product4, product5, product6];

const ImageGallery: React.FC = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center">
      {/* Responsive grid for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-white border rounded-lg"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
