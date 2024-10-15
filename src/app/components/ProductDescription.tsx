// components/ProductDescription.tsx
import React from "react";

const ProductDescription: React.FC = () => {
  return (
    <div className="md:w-1/2 p-6 flex flex-col justify-start">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">وصف المنتج</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        هنا يمكنك إضافة وصف شامل للمنتج. استخدم هذا المكان لتقديم معلومات إضافية
        حول المنتج، مثل الميزات، الاستخدامات، والفوائد. تأكد من جعل الوصف جذابًا
        وواضحًا لزيادة الاهتمام.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        يمكنك أيضًا إضافة معلومات عن كيفية الاستخدام، وتعليمات العناية،
        والمواصفات الفنية، وغيرها من المعلومات المهمة.
      </p>
      <p className="text-gray-700 leading-relaxed">
        الصور التي تم عرضها أعلاه تعكس جمال وتفاصيل المنتج بشكل مثير.
      </p>
    </div>
  );
};

export default ProductDescription;
