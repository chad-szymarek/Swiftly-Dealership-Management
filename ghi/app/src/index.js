import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadSales() {
  const salesPersonResponse = await fetch('http://localhost:8090/api/sales/');

  if (salesPersonResponse.ok)  {
    const salespersonData = await salesPersonResponse.json();
    root.render(
      <React.StrictMode>
        <App salesPerson={salespersonData}/>
      </React.StrictMode>
    );            
  } else {
    console.error(salesPersonResponse);
  }
}

loadSales()
