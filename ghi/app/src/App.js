import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentList from './ServiceComponents/AppointmentList';
import TechnicianForm from './ServiceComponents/TechnicianForm';
import AppointmentForm from './ServiceComponents/AppointmentForm';
import AppointmentHistory from './ServiceComponents/AppointmentHistory';

import ManufacturerList from './InventoryComponents/ManufacturerList';

function App() {
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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
