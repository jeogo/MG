"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import Form from "./components/Form";
import ProductFeatures from "./components/ProductFeatures";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// import LimitedOffer from "./components/LimitedOffer";
import ImageGallery from "./components/ImageGallery";

// Import product images (StaticImageData)
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";

// Update the type of productImages to StaticImageData[]
const productImages = [product1, product2, product3, product4, product5];

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(productImages[0]);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col md:flex-row justify-center items-start py-12 px-4">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row">
            {/* Image section (left) */}
            <div className="w-full md:w-1/2 p-6">
              <ProductImage
                selectedProduct={selectedProduct.src} 
                setSelectedProduct={(image) => setSelectedProduct(productImages.find(img => img.src === image)!)}
                productImages={productImages.map(img => img.src)} 
              />
            </div>
            {/* Form section (right) */}
            <div className="w-full md:w-1/2 p-6">
              <Form />
            </div>
          </div>
        </div>
      </main>
      {/* <LimitedOffer /> */}
      <div className="max-w-7xl mx-auto gap-8 py-12 px-4">
        <ProductFeatures />
        {/* <Testimonials /> */}
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
