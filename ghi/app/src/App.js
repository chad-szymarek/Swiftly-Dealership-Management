import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceList';
import TechnicianForm from './TechnicianForm';
import ServiceForm from './ServiceForm';
import ServiceHistory from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route index element={<ServiceList />} />
            <Route path="create/" element={<ServiceForm />} />
            <Route path="history/" element={<ServiceHistory />} />
          </Route>
          <Route path="technicians">
            <Route index element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
