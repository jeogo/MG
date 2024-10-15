import React from "react";
import Image from "next/image";

interface ProductImageProps {
  selectedProduct: string;
  setSelectedProduct: (image: string) => void;
  productImages: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({
  selectedProduct,
  setSelectedProduct,
  productImages,
}) => {
  return (
    <div className="w-full flex flex-col items-center space-y-6">
      {/* Main product image */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <Image
          src={selectedProduct}
          alt="Main Product"
          height={500}
          width={500}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Small product boxes */}
      <div className="flex justify-center items-center gap-4 w-full">
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 sm:w-20 sm:h-20 cursor-pointer hover:opacity-80 transition-all rounded-lg shadow-md overflow-hidden flex-shrink-0 ${
              selectedProduct === image ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedProduct(image)}
          >
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              width={80}
              height={80}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
