import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOption = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <Panel
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOption(option)}
        key={option.value}
      >
        {option.label}
      </Panel>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "select ..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOption}</Panel>}
    </div>
  );
}

export default Dropdown;
