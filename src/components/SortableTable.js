import React from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-Sort";

function SortableTable(props) {
  const { config, datas } = props;
  const {sortColumn,sortBy,sortedData,orderBy} = useSort(datas,config)
  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => {
            sortColumn(column.label);
          }}
        >
          <div className="flex items-center">
            {column.label}
            {getIcons(column.label, sortBy, orderBy)}
          </div>
        </th>
      ),
    };
  });
  
  return (
    <div>
      {orderBy}-{sortBy}
      <Table {...props} datas={sortedData} config={updateConfig} />
    </div>
  );
}

function getIcons(label, sort, order) {
  if (label !== sort) {
    return (
      <div className="border">
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (order === null) {
    return (
      <div className="cursor-pointer hover:bg-green-100 border">
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (order === "ASC") {
    return (
      <div className="cursor-pointer hover:bg-green-100 border">
        <GoArrowSmallUp />
      </div>
    );
  } else if (order === "DSC") {
    return (
      <div className="cursor-pointer hover:bg-green-100 border">
        <GoArrowSmallDown />
      </div>
    );
  }
}
export default SortableTable;
