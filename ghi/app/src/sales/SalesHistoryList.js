import React, { useEffect, useState } from 'react';


function SalesHistoryList(props) {
    const salespersons = props.salespersons
    const [salesHistory, setSalesHistory] = useState()
    const [salesData, setSalesData] = useState()
    
    
    const handleChange = (event) => {
        setSalesHistory(event.target.value);
      };

    useEffect(() => {
        if (!salesHistory || salespersons.sales_person.emp_no === undefined) {
            return;
        }
        const GetSalesData = () => {
            const salesPersonData = salespersons.filter(salesrecord => {

                return salesrecord.sales_person.emp_no === salesHistory.sales_person.emp_no
            })
            setSalesData(salesPersonData)
        }
        GetSalesData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salesHistory]);



    return (        
        <>
        <h1>Sales Person History</h1>
        <select onChange={handleChange} value={salesHistory} className="form-select" name="salesPerson" id="salesPerson" aria-label="Default select example">
            <option>Select a Salesperson</option>
            {props.salesreps.map(salesrep => {
                return (
                    <option key={salesrep.employee_number} value={salesrep.employee_number}>
                        {salesrep.name}
                    </option>
                )
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
            {salesData !== undefined && 
                salesData.map((salesperson) => {           
                 console.log("sandwich", salesperson)
                    return (                       
                    <tr key={salesperson.automobile}>  
                        <td>{ salesperson.sales_person.name }</td>
                        <td>{ salesperson.customer }</td>
                        <td>{ salesperson.automobile }</td>
                        <td>${ salesperson.price }</td>
                    </tr>
                    );
            })}            
            </tbody>
        </table>
        </>
    );
  }
  
  export default SalesHistoryList;
