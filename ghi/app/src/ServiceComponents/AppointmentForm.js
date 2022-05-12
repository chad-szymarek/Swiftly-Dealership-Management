import React, { useState, useEffect } from "react";

function AppointmentForm() {
  const [state, setState] = useState({
    customer_name: "",
    vin: "",
    date: "",
    time: "",
    technician: "",
    reason: "",
  });
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchTechnicianData = async () => {
      const responseTechnician = await fetch(
        "http://localhost:8080/api/technicians/"
      );
      const technicianData = await responseTechnician.json();
      setTechnicians(technicianData.technicians);
    };

    fetchTechnicianData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
<<<<<<< HEAD
=======
    const data = {
      customer_name: customerName,
      vin: vin,
      date: date,
      time: time,
      technician: technician,
      reason: reason,
    };
>>>>>>> main

    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(appointmentUrl, fetchConfig);

    if (response.ok) {
      setState({
        customer_name: "",
        vin: "",
        date: "",
        time: "",
        technician: "",
        reason: "",
      });
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new appointment</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  value={state.customer_name}
                  placeholder="Customer Name"
                  required
                  name="customer_name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="customer_name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  value={state.vin}
                  placeholder="vin"
                  required
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">Vin Number</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  onChange={handleChange}
                  value={state.date}
                  placeholder="date"
                  required
                  name="date"
                  id="date"
                  className="form-control"
                />
                <label htmlFor="date">Date</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="time"
                  onChange={handleChange}
                  value={state.time}
                  placeholder="time"
                  required
                  name="time"
                  id="time"
                  className="form-control"
                />
                <label htmlFor="time">Time</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={handleChange}
                  value={state.technician}
                  required
                  name="technician"
                  id="technician"
                  className="form-select"
                >
                  <option value="">Choose a technician</option>
                  {technicians.map((technician) => {
                    return (
                      <option
                        key={technician.employee_number}
                        value={technician.employee_number}
                      >
                        {technician.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <label htmlFor="technician">Technician</label>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  value={state.reason}
                  placeholder="reason"
                  required
                  name="reason"
                  id="reason"
                  className="form-control"
                />
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  };


export default AppointmentForm;