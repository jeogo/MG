import React, { useState } from "react";
import communesData from "../data/communes.json";

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

interface ColorOption {
  name: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { name: "أحمر", value: "red" },
  { name: "أخضر", value: "green" },
  { name: "أزرق", value: "blue" },
  { name: "أصفر", value: "yellow" },
  { name: "برتقالي", value: "orange" },
];

const price: number = 100;

const Form: React.FC = () => {
  const [selectedWilayaCode, setSelectedWilayaCode] = useState<string>("");
  const [selectedCommune, setSelectedCommune] = useState<string>("");
  const [communes, setCommunes] = useState<Commune[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
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
    <div className="w-full p-4">
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="الاسم" placeholder="أدخل اسمك" />
          <InputField label="اللقب" placeholder="أدخل لقبك" />
        </div>

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

        <ColorSelection
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

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

        <InputField
          label="رقم الهاتف"
          type="tel"
          placeholder="أدخل رقم هاتفك"
        />

        <SubmitButton />
      </form>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm text-gray-600 font-medium">{label}</span>
    <input
      className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out text-sm"
      {...props}
    />
  </label>
);

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  ...props
}) => (
  <label className="block">
    <span className="text-sm text-gray-600 font-medium">{label}</span>
    <select
      className="w-full p-2 mt-1 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out text-sm"
      {...props}
    >
      <option value="">{`اختر ${label}`}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

interface ColorSelectionProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({
  selectedColor,
  setSelectedColor,
}) => (
  <fieldset>
    <legend className="text-sm text-gray-600 font-medium mb-2">
      اختر اللون
    </legend>
    <div className="grid grid-cols-5 gap-2">
      {colorOptions.map(({ name, value }) => (
        <label key={value} className="flex flex-col items-center">
          <input
            type="radio"
            value={value}
            checked={selectedColor === value}
            onChange={() => setSelectedColor(value)}
            className="sr-only"
          />
          <div
            className={`w-10 h-10 rounded-full border cursor-pointer transition-transform ${
              selectedColor === value
                ? "border-blue-500 scale-110 ring-2 ring-blue-300"
                : "border-gray-300 hover:border-gray-400"
            }`}
            style={{ backgroundColor: value }}
          />
          <span className="mt-1 text-xs text-gray-500">{name}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

interface PriceDisplayProps {
  price: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => (
  <div className="text-center">
    <span className="text-sm text-gray-600 font-medium">السعر الإجمالي</span>
    <p className="text-xl font-bold text-green-500 mt-1">{price} دج</p>
  </div>
);

const SubmitButton: React.FC = () => (
  <button
    type="submit"
    className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out text-sm"
  >
    <span className="font-medium">إرسال الطلب</span>
  </button>
);

export default Form;
