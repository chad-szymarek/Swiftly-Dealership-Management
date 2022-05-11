import { NavLink } from 'react-router-dom';

function Nav() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">        
          <NavLink className="navbar-brand" to="/">CarCar</NavLink>
          <div className="dropdown">
              <NavLink className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" to="/technicians/">Create Technician</NavLink> 
                <NavLink className="dropdown-item" to="/appointments/">Show Appointments</NavLink> 
                <NavLink className="dropdown-item" to="/appointments/create/">Create Appointment</NavLink> 
                <NavLink className="dropdown-item" to="/appointments/history/">Show Appointment History</NavLink> 

              </div>
        </div>
        <div className="dropdown">
            <NavLink className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <NavLink className="dropdown-item" to="/technicians/">Create Technician</NavLink> 
              <NavLink className="dropdown-item" to="/appointments/">Show Appointments</NavLink> 
              <NavLink className="dropdown-item" to="/appointments/create/">Create Appointment</NavLink> 
              <NavLink className="dropdown-item" to="/appointments/history/">Show Appointment History</NavLink> 

            </div>
      </div>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
          </li>
          </ul>
        </div>
        
      </div>
    </nav>
 
  );
}

export default Nav;
