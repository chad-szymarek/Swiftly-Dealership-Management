import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceLIst';
import SalespersonForm from './sales/SalespersonForm';
import SalesForm from './sales/SalesForm';
import CustomerForm from './sales/CustomerForm';
import salesPersonHistory from './sales/SalesList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="services">
            <Route index element={<ServiceList />} />
          </Route>
          <Route path="/salesperson">
            <Route index element={<SalespersonForm />} />
          </Route>
          <Route path="/customer">
            <Route index element={<CustomerForm />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesForm />} />
            <Route path="history" element={<salesPersonHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
