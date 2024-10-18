import React from "react";
import Image from "next/image";

interface Product {
  src: string;
  name: string;
}

interface ProductImageProps {
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  productImages: Product[];
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
          src={selectedProduct.src}
          alt={selectedProduct.name}
          height={500}
          width={500}
          priority
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Small product thumbnails */}
      <div className="flex justify-center items-center gap-2 w-full">
        {productImages.map((image, index) => (
          <div
            key={index}
            className={`w-16 h-16 sm:w-20 sm:h-20 cursor-pointer hover:opacity-80 transition-all rounded-lg shadow-md overflow-hidden flex-shrink-0 border-2 ${
              selectedProduct.src === image.src
                ? "border-blue-500"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedProduct(image)}
          >
            <Image
              src={image.src}
              alt={image.name}
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
