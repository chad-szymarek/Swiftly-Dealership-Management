import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">        
          <NavLink className="navbar-brand" to="/">CarCar</NavLink>
          <div className="dropdown">
              <NavLink className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" to="/salesperson">New Salesperson</NavLink> 
                <NavLink className="dropdown-item" to="/customer">New Customer</NavLink> 
                <NavLink className="dropdown-item" to="/sales">New Sales Record</NavLink> 
                <NavLink className="dropdown-item" to="/sales/list">Sales List</NavLink> 
                <NavLink className="dropdown-item" to="/sales/history">Salesperson History</NavLink> 
              </div>
        </div>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">           
          </li>            
          </ul>
        </div>        
      </div>
    </nav>
  )
}

export default Nav;
