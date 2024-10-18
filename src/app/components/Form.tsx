import React, { useState } from "react";
import { FaShoppingCart, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import communesData from "../data/communes.json"; // Adjust the path as necessary

interface Product {
  src: string;
  name: string;
}

interface Commune {
  id: number;
  commune_name_ascii: string;
  commune_name: string;
  daira_name_ascii: string;
  daira_name: string;
  wilaya_code: string;
  wilaya_name_ascii: string;
  wilaya_name: string;
}

interface FormProps {
  selectedProduct: Product;
}

const price: number = 100;

const Form: React.FC<FormProps> = ({ selectedProduct }) => {
  const [selectedWilayaCode, setSelectedWilayaCode] = useState<string>("");
  const [selectedCommune, setSelectedCommune] = useState<string>("");
  const [communes, setCommunes] = useState<Commune[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleWilayaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wilayaCode = e.target.value;
    setSelectedWilayaCode(wilayaCode);
    const filteredCommunes = communesData.filter(
      (commune: Commune) => commune.wilaya_code === wilayaCode
    );
    setCommunes(filteredCommunes);
    setSelectedCommune("");
  };

  return (
    <div className="w-full p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-lg">
      <form className="space-y-6">
        {/* Full Name Field */}
        <InputField label="الاسم الكامل" placeholder="أدخل اسمك الكامل" />

        {/* Wilaya Selection */}
        <SelectField
          label="الولاية"
          value={selectedWilayaCode}
          onChange={handleWilayaChange}
          options={Array.from(
            new Set(communesData.map((commune: Commune) => commune.wilaya_code))
          ).map((wilayaCode) => ({
            value: wilayaCode,
            label:
              communesData.find(
                (commune: Commune) => commune.wilaya_code === wilayaCode
              )?.wilaya_name || "",
          }))}
        />

        {/* Commune Selection */}
        <SelectField
          label="البلدية"
          value={selectedCommune}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCommune(e.target.value)
          }
          options={communes.map((commune) => ({
            value: commune.commune_name,
            label: commune.commune_name,
          }))}
          disabled={communes.length === 0}
        />

        {/* Quantity and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <InputField
            label="الكمية"
            type="number"
            value={quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuantity(Number(e.target.value))
            }
            min={1}
          />
          <PriceDisplay price={price * quantity} />
        </div>

        {/* Selected Product Display */}
        <div className="text-sm text-gray-700 mt-4">
          <FaInfoCircle className="inline-block text-blue-500 mr-2" />
          <span>تم اختيار هذا المنتج:</span>{" "}
          <strong className="text-blue-600">{selectedProduct.name}</strong>
        </div>

        {/* Phone Number Field */}
        <InputField
          label="رقم الهاتف"
          type="tel"
          placeholder="أدخل رقم هاتفك"
          icon={<FaPhoneAlt className="text-pink-500" />}
        />

        {/* Submit Button */}
        <SubmitButton />
      </form>
    </div>
  );
};

// Input field component
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, ...props }) => (
  <label className="block">
    <span className="text-sm text-purple-700 font-medium">{label}</span>
    <div className="relative mt-1">
      {icon && (
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </span>
      )}
      <input
        className={`w-full p-3 ${
          icon ? "pl-10" : ""
        } border border-purple-300 rounded focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-150 ease-in-out text-sm bg-white text-purple-900`}
        {...props}
      />
    </div>
  </label>
);

// Select field component
const SelectField = ({
  label,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}) => (
  <label className="block">
    <span className="text-sm text-purple-700 font-medium">{label}</span>
    <select
      className="w-full p-3 mt-1 border border-purple-300 rounded focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-150 ease-in-out text-sm bg-white text-purple-900"
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">{`اختر ${label}`}</option>
      {options.map((option,index) => (
        <option key={option.value} value={option.value}>
        {index+1} - {option.label}
        </option>
      ))}
    </select>
  </label>
);

// Price display component
const PriceDisplay = ({ price }: { price: number }) => (
  <div className="text-center">
    <span className="text-sm text-purple-600 font-medium">السعر الإجمالي</span>
    <p className="text-3xl font-bold text-purple-600 mt-1">{price} دج</p>
  </div>
);

// Submit button component
const SubmitButton: React.FC = () => (
  <button
    type="submit"
    className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-150 ease-in-out text-base font-semibold flex items-center justify-center space-x-2 transform hover:-translate-y-1 active:translate-y-0"
  >
    <FaShoppingCart />
    <span>إرسال الطلب</span>
  </button>
);

export default Form;
