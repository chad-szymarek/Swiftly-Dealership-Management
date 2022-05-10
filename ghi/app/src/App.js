import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceLIst';
import TechnicianForm from './TechnicianForm';

function App() {
  const [currentAppointments, setCurrentAppointments] = useState([]);
  const [currentTechnicians, setCurrentTechnicians] = useState([]);
  
  useEffect(() => {
      const fetchAppointmentData = async () => {
          const responseAppointment = await fetch('http://localhost:8080/api/appointments/');
          const appointmentData = await responseAppointment.json();
          setCurrentAppointments(appointmentData.appointments);
      }

      const fetchTechnicianData = async () => {
        const responseTechnician = await fetch('http://localhost:8080/api/technicians/');
        const technicianData = await responseTechnician.json();
        setCurrentTechnicians(technicianData.technicians)
      }

      fetchAppointmentData()
      fetchTechnicianData()
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route index element={<ServiceList appointments={currentAppointments} />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianForm technicians={currentTechnicians} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
