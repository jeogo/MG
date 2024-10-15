// pages/index.tsx
"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import Form from "./components/Form";
import ImageGallery from "./components/ImageGallery";
import ProductDescription from "./components/ProductDescription";

const productImages: string[] = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
  "/images/product4.jpg",
  "/images/product5.jpg",
];

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    productImages[0]
  );

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row justify-center items-start py-12 px-4">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row">
            {/* Image section (left) */}
            <div className="w-full md:w-1/2 p-6">
              <ProductImage
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                productImages={productImages}
              />
            </div>
            {/* Form section (right) */}
            <div className="w-full md:w-1/2 p-6">
              <Form />
            </div>
          </div>
        </div>
      </main>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 py-12 px-4">
        {/* Product description (left) */}
        <ProductDescription />
        {/* Image gallery (right) */}
        <div className="md:w-1/2">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
