import React from 'react';


function SalesList(props) {
    return (
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
          {props.salesperson.sales.map(salesperson => {
            return (
              <tr key={salesperson.automobile}>  
                <td>{ salesperson.sales_person.name }</td>
                <td>{ salesperson.sales_person.emp_no }</td>
                <td>{ salesperson.customer }</td>
                <td>{ salesperson.automobile }</td>
                <td>${ salesperson.price }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export default SalesList;
