import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ label, options = [], onSelect, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 w-full bg-transparent text-purple-900 border-2 border-purple-900 rounded-xl flex justify-between items-center cursor-pointer h-[44px]"
      >
        <span className="truncate">{value || label}</span>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 bg-purple-300 shadow-lg rounded-xl w-full z-50">
          {options.map((item, index) => (
            <p
              key={index}
              className="hover:bg-gray-100 p-2 rounded cursor-pointer"
              onClick={() => {
                onSelect(item);
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
};

export default Dropdown;
