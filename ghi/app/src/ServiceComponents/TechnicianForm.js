import React, { useState } from "react";

function TechnicianForm() {
  const [state, setState] = useState({
    name: "",
    employee_number: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = state;

    const technicianUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(technicianUrl, fetchConfig);

    if (response.ok) {
      setState({
        name: "",
        employee_number: "",
      });
    }
  };

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
          <h1>Create a new technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={state.name}
                placeholder="Technician Name"
                required
                name="name"
                id="technician_name"
                className="form-control"
              />
              <label htmlFor="style_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={state.employee_number}
                placeholder="Employee Number"
                required
                name="employee_number"
                id="employee_number"
                className="form-control"
              />
              <label htmlFor="color">Employee Numbver</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
