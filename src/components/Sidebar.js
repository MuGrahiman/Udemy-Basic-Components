import React from "react";
import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Drop down", path: "/" },
    { label: "Accordian", path: "/Accordian" },
    { label: "Button", path: "/Button" },
    { label: "Modal", path: "/Modal" },
    { label: "Table", path: "/Table" },
    { label: "Counter", path: "/Count" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
