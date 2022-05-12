import React, { useState } from "react";

function TechnicianForm() {
  const [technicianName, setTechnicianName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: technicianName,
      employee_number: employeeNumber,
    };

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
      setTechnicianName("");
      setEmployeeNumber("");
    }
  };

  const handleNameChange = (event) => {
    setTechnicianName(event.target.value);
  };

  const handleEmployeeNumberChange = (event) => {
    setEmployeeNumber(event.target.value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={technicianName}
                placeholder="Technician Name"
                required
                name="technician_name"
                id="technician_name"
                className="form-control"
              />
              <label htmlFor="style_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleEmployeeNumberChange}
                value={employeeNumber}
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
