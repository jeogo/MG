import React from "react";

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
        <img
          src={selectedProduct}
          alt="Main Product"
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
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
