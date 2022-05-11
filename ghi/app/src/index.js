import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadSales() {
  const salesPersonResponse = await fetch('http://localhost:8090/api/sales/');
  const salesrepResponse = await fetch('http://localhost:8090/api/salespersons/');

  if (salesPersonResponse.ok || salesrepResponse.ok)  {
    const salespersonData = await salesPersonResponse.json();
    const salesrepData = await salesrepResponse.json();
    console.log("saleshistory: ", salespersonData)
    console.log("salesrep: ", salesrepData)
    root.render(
      <React.StrictMode>
        <App salespersons={salespersonData.sales} salesreps={salesrepData.salespersons}/>
      </React.StrictMode>
    );            
  } else {
    console.error(salesPersonResponse || salesrepResponse);
  }
}
loadSales()
