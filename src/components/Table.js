import React, { Fragment } from "react";

function Table({ datas, config ,KeyFn}) {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {config.map((column) => {
            if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
                
            }
            return <th key={column.label}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => {
          return (
            <tr key={data.name} className="border-b">
                    {config.map((column)=>{
                    return(
                    <td key={column.label} className="p-3">{column.render(data)}</td>
                    )
                    })}
          
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
   
export default Table;
