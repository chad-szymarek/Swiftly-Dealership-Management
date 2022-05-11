import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceList from './ServiceList';
import SalespersonForm from './sales/SalespersonForm';
import SalesForm from './sales/SalesForm';
import CustomerForm from './sales/CustomerForm';
import SalesList from './sales/SalesList';
import TechnicianForm from './TechnicianForm';
import ServiceForm from './ServiceForm';
import ServiceHistory from './ServiceHistory';
import SalesHistoryList from './sales/SalesHistoryList';

function App(props) {
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
          <Route path="/salesperson">
            <Route index element={<SalespersonForm />} />
          </Route>
          <Route path="/customer">
            <Route index element={<CustomerForm />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesForm />} />
            <Route path="list" element={<SalesList salesperson={props.salesperson}/>} />
            <Route path="history" element={<SalesHistoryList salespersons={props.salespersons} salesreps={props.salesreps}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
