import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './ServiceComponents/AppointmentList';
import TechnicianForm from './ServiceComponents/TechnicianForm';
import AppointmentForm from './ServiceComponents/AppointmentForm';
import AppointmentHistory from './ServiceComponents/AppointmentHistory';

import ManufacturerList from './InventoryComponents/ManufacturerList';
import ManufacturerForm from './InventoryComponents/ManufacturerForm';

import SalespersonForm from './sales/SalespersonForm';
import SalesForm from './sales/SalesForm';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path="create/" element={<AppointmentForm />} />
            <Route path="history/" element={<AppointmentHistory />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianForm />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path='create/' element={<ManufacturerForm />} />
          </Route>
          <Route path="/salesperson">
            <Route index element={<SalespersonForm />} />
          </Route>
          <Route path="/customer">
            <Route index element={<CustomerForm />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesForm />} />
            <Route path="list" element={<SalesList salesperson={props.salesperson}/>} />
            {/* <Route path="history" element={<salesPersonHistory />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
