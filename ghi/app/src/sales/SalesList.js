import React from 'react';


function salesPersonList(props) {
//   const deleteSale = async (href) => {
//     fetch(`http://localhost:8090${href}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     window.location.reload();
// }
  

    return (
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
          {props.salesperson.map(salesperson => {
            console.log(salesperson)
            return (
              <tr key={salesperson.href}>  
                <td>{ salesperson.name }</td>
                <td>{ salesperson.customer }</td>
                <td>{ salesperson.vin }</td>
                <td>{ salesperson.price }</td>
                {/* <td><button onClick={() => deleteSale(salesperson.href)} type="button" className="btn btn-danger">Delete</button></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export default salesPersonList;
  