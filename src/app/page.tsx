"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import Form from "./components/Form";
import ProductFeatures from "./components/ProductFeatures";
import ProductDescription from "./components/ProductDescription";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";

// Import product images (StaticImageData)
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";

// Define the shape of each product (image and model name)
interface Product {
  src: string;
  name: string;
}

// Array of product images with model names
const productImages: Product[] = [
  { src: product1.src, name: "Model 1" },
  { src: product2.src, name: "Model 2" },
  { src: product3.src, name: "Model 3" },
  { src: product4.src, name: "Model 4" },
  { src: product5.src, name: "Model 5" },
];

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    productImages[0]
  );

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-start py-12 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Product Image and Form */}
          <div className="flex flex-col md:flex-row mb-12">
            {/* Product Image (left) */}
            <div className="w-full md:w-1/2 p-6">
              <ProductImage
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                productImages={productImages}
              />
            </div>

            {/* Form Section (right) */}
            <div className="w-full md:w-1/2 p-6">
              <Form selectedProduct={selectedProduct} />
            </div>
          </div>

          {/* Reversed Layout: Description (left) & Image Gallery (right) */}
          <div className="flex flex-col md:flex-row items-start mb-12 space-y-8 md:space-y-0 md:space-x-6">
            {/* Product Description (left) */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-white">
              <ProductDescription />
            </div>

            {/* Image Gallery (right) */}
            <div className="w-full md:w-1/2 p-6 flex justify-center items-center bg-gray-100 shadow-lg rounded-lg">
              <ImageGallery />
            </div>
          </div>

          {/* Product Features */}
          <div className="mb-12">
            <ProductFeatures />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
