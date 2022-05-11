import React from 'react';


function SalesHistoryList(props) {
    




    return (        
        <>
        {console.log("whats shit: ", props)
}
        <h1>Sales Person History</h1>
        <select className="form-select" name="salesPerson" id="salesPerson" aria-label="Default select example">
            <option>Select a Salesperson</option>
            {props.salesreps.map(salesrep => {
                return (
                    <option key={salesrep.id} id="salesrecord">
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
            
            {props.salespersons.map(salesperson => {
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
