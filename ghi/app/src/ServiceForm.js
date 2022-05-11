import React, { useState, useEffect } from "react";

function ServiceForm({ onAppointmentCreated }) {
  const [customerName, setCustomerName] = useState("");
  const [vin, setVin] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [technician, setTechnician] = useState("");
  const [reason, setReason] = useState("");
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
    const data = {
      customer_name: customerName,
      vin: vin,
      date: date,
      time: time,
      technician: technician,
      reason: reason,
    };
    console.log("data", data);

    const appointmentUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(appointmentUrl, fetchConfig);
    console.log(response);

    if (response.ok) {
      setCustomerName("");
      setVin("");
      setDate("");
      setTime("");
      setTechnician("");
      setReason("");

      onAppointmentCreated(response.json())
    }
  };

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleVinChange = (event) => {
    setVin(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleTechnicianChange = (event) => {
    setTechnician(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new appointment</h1>
          <form onSubmit={handleSubmit} id="create-appointment-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleNameChange}
                value={customerName}
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
                onChange={handleVinChange}
                value={vin}
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
                onChange={handleDateChange}
                value={date}
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
                onChange={handleTimeChange}
                value={time}
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
                onChange={handleTechnicianChange}
                value={technician}
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
                onChange={handleReasonChange}
                value={reason}
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
}

export default ServiceForm;
