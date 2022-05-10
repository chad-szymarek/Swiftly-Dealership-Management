import React, { useState, useEffect } from 'react';

function ServiceList({ appointments }) {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:8080/api/appointments/');
    //         const data = await response.json()
    //         setCurrentAppointments(data.appointments);
    //     }
    //     fetchData()
    // }, []);
    // console.log(typeof(currentAppointments))

    return(
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Vin</th>
                        <th>Technician</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.customer_name}</td>
                                <td>{appointment.vin}</td>
                                <td>{appointment.technician.employee_number}</td>
                                <td>{appointment.reason}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceList