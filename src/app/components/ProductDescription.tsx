import React from "react";

const ProductDescription: React.FC = () => {
  return (
    <div className="md:w-full p-6 flex flex-col justify-start">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">وصف المنتج</h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-base">
        تميزي بإطلالة أنيقة وجذابة مع هذا المعطف الفاخر، المصمم خصيصاً لمنحك لمسة من الفخامة والرقي. يأتي بلون وردي هادئ مع حواف مطرزة سوداء، ليضفي لمسة من التميز على كل مناسبة.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">المميزات:</h3>
      <ul className="list-none space-y-3 text-base text-gray-700 mb-6">
        <li>✨ <strong>جودة عالية:</strong> تصميم فاخر بخامات متينة.</li>
        <li>🎨 <strong>ألوان متنوعة:</strong> متوفر بألوان عصرية تناسب ذوقك.</li>
        <li>🧵 <strong>تطريز دقيق:</strong> حواف سوداء تضيف لمسة من الفخامة.</li>
        <li>🎯 <strong>راحة مثالية:</strong> تصميم واسع لضمان الراحة اليومية.</li>
        <li>🚚 <strong>توصيل سريع:</strong> احصل على منتجك بسرعة فائقة.</li>
        <li>📞 <strong>دعم دائم:</strong> خدمة عملاء متاحة 24/7.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">كيفية الاستخدام:</h3>
      <p className="text-gray-700 mb-4 leading-relaxed text-base">
        ارتديه مع ملابسك المفضلة سواءً كانت إطلالة رسمية أو يومية. مثالي للأيام الباردة والمناسبات الخاصة.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">المواصفات:</h3>
      <p className="text-gray-700 leading-relaxed text-base">
        متوفر بمقاسات مختلفة وتصميم مقاوم للطقس، مما يجعله خياراً مثالياً لفصل الشتاء.
      </p>
    </div>
  );
};

export default ProductDescription;
