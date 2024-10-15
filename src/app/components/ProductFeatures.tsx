import React from "react";
import { FaShippingFast, FaPalette, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { BsGearWide } from "react-icons/bs";

const ProductFeatures: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-wide">
        ✨ مميزات المنتج ✨
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <FaShieldAlt className="text-5xl text-blue-600 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">جودة فائقة</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            منتج مصنوع بأعلى مستويات الجودة ليناسب أسلوبك الفاخر ويضمن لك الراحة طوال اليوم.
          </p>
        </div>



        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <FaPalette className="text-5xl text-yellow-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">ألوان مميزة</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            مجموعة متنوعة من الألوان الأنيقة التي تضفي لمسة من الفخامة على إطلالتك.
          </p>
        </div>

        {/* Feature 4 */}


        {/* Feature 5 */}
        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <BsGearWide className="text-5xl text-red-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">تصميم مبتكر</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            تصميم عصري ومريح يناسب إطلالتك اليومية بكل أناقة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
