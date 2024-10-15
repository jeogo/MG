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
    <div className="w-full p-0 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-0 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
