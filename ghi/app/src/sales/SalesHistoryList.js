import React, { useEffect, useState } from "react";

function SalesHistoryList(props) {
  const salespersons = props.salespersons;
  const [salesRecord, setSalesRecord] = useState();
  const [salesData, setSalesData] = useState(salespersons);

  const handleChange = (event) => {
    setSalesRecord(event.target.value);
  };

  useEffect(() => {
    const GetSalesData = () => {
      if (!salesRecord) {
        setSalesData(salespersons);
        return;
      }

      const salesPersonData = salespersons.filter((salesperson) => {
        const salesperson1 = salesperson.sales_person.emp_no;
        return salesperson1 === Number(salesRecord);
      });
      setSalesData(salesPersonData);
    };
    GetSalesData();
  }, [salesRecord, salespersons]);

  return (
    <>
      <h1>Sales Person History</h1>
      <select
        onChange={handleChange}
        value={salesRecord}
        className="form-select"
        name="salesPerson"
        id="salesPerson"
        aria-label="Default select example"
      >
        <option>Select a Salesperson</option>
        {props.salesreps.map((salesrep) => {
          return (
            <option
              key={salesrep.employee_number}
              value={salesrep.employee_number}
            >
              {salesrep.name}
            </option>
          );
        })}
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales person</th>
            <th>Customer</th>
            <th>VIN</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((salesperson) => {
            return (
              <tr key={salesperson.automobile}>
                <td>{salesperson.sales_person.name}</td>
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

export default SalesHistoryList;
