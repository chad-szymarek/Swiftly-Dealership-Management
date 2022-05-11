import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadSales() {
  const salesPersonResponse = await fetch('http://localhost:8090/api/sales/');

  if (salesPersonResponse.ok)  {
    const salespersonData = await salesPersonResponse.json();
    console.log(salespersonData)
    root.render(
      <React.StrictMode>
        <App salesperson={salespersonData}/>
      </React.StrictMode>
    );            
  } else {
    console.error(salesPersonResponse);
  }
}
loadSales()
