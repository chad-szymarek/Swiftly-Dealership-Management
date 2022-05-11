import React from 'react';

function ServiceList({ appointments }) {
    const deleteAppointment = async (id) => {
        fetch(`http://localhost:8080/api/appointments/${id}/`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        });
        window.location.reload();
    }

    return(
        <>
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
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.customer_name}</td>
                                {appointment.vip && (
                                    <td>True</td>
                                )}
                                {!appointment.vip && (
                                    <td>False</td>
                                )}
                                <td>{appointment.vin}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.technician.employee_number}</td>
                                <td>{appointment.reason}</td>
                                <td><button onClick={() => deleteAppointment(appointment.id)}>Cancel</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceList