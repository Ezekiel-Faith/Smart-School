import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Dropdown({ label, options = [], onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 w-50 h-auto bg-transparent text-purple-900 border-2 border-purple-900 rounded-xl flex gap-5 items-center justify-center"
      >
        <p>{label}</p>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {open && (
        <div className="absolute mt-2 bg-purple-300 shadow-lg rounded-b-sm px-4 py-2 w-50">
          {options.map((item, index) => (
            <p
              key={index}
              className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              onClick={() => {
                onSelect && onSelect(item);
                setOpen(false);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
