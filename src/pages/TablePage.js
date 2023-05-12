import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const KeyFn = () => Date.now();
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 2 },
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 1 },
  ];
  const config = [
    {
      label: "Name",
      render: (data) => data.name,
      sortValue: (value) => value.name,
    },
    {
      label: "Color",
      render: (data) => <div className={`p-3 ${data.color} m-2 `}></div>,
    },
    {
      label: "Score",
      render: (data) => data.score,
      sortValue: (value) => value.score,
    },
  ];
  return (
    <div>
      <SortableTable datas={data} config={config} KeyFn={KeyFn} />
    </div>
  );
}

export default TablePage;
