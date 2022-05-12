import React, { useState, useEffect } from "react";

function AppointmentHistory() {
  const [search, setSearch] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      const responseAppointment = await fetch(
        "http://localhost:8080/api/appointments/"
      );
      const appointmentData = await responseAppointment.json();
      const filteredAppointmentData = appointmentData.appointments.filter(appointment => appointment.finished === true);
      setAppointments(filteredAppointmentData);
    };

    fetchAppointmentData();
  }, []);
  
  const handleClick = () => {
    const filtered = appointments.filter(appointment => appointment.vin === search);
    setFilteredAppointments(filtered);
  } 

  return (
    <>
        <div>
            <input type="text" placeholder="Search vins" onChange={event => setSearch(event.target.value)} />
            <span><button onClick={handleClick} type="submit">Search</button></span>
        </div>
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>Customer</th>
                <th>Vip</th>
                <th>Vin</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
            </tr>
            </thead>
            <tbody>
            {filteredAppointments.map((appointment) => {
                return (
                <tr key={appointment.id}>
                    <td>{appointment.customer_name}</td>
                    {appointment.vip && <td>True</td>}
                    {!appointment.vip && <td>False</td>}
                    <td>{appointment.vin}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.technician.employee_number}</td>
                    <td>{appointment.reason}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </>
  );
}

export default AppointmentHistory;