import React from "react";

function SalesList(props) {
  return (
    <>
      <h1>Sales List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales person</th>
            <th>Employee number</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {props.salespersons.map((salesperson) => {
            return (
              <tr key={salesperson.automobile}>
                <td>{salesperson.sales_person.name}</td>
                <td>{salesperson.sales_person.emp_no}</td>
                <td>{salesperson.customer}</td>
                <td>{salesperson.automobile}</td>
                <td>${salesperson.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SalesList;

/*  You need to show a page that lists all sales showing: 
sales person's name, 
employee number,
the purchaser's name,
the automobile VIN,
price of the sale */
