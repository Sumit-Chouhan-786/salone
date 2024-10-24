import React, { useState, useEffect } from "react";
import axios from "axios";

const History = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [previousAppointments, setPreviousAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const upcomingResponse = await axios.get("/api/appointments/upcoming");
      setUpcomingAppointments(upcomingResponse.data);

      const previousResponse = await axios.get("/api/appointments/previous");
      setPreviousAppointments(previousResponse.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/appointments/${id}`);
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const handleUpdate = (id) => {
    console.log("Update appointment:", id);
  };

  return (
    <div className="flex flex-col justify-center pt-5 px-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Appointments</h1>
      <table className="w-full border-collapse border mb-8">
        <thead>
          <tr>
            <th className="border p-2">Email</th>
            <th className="border p-2">Appointment ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border p-2">{appointment.email}</td>
              <td className="border p-2">{appointment.id}</td>
              <td className="border p-2">{appointment.date}</td>
              <td className="border p-2">{appointment.startTime}</td>
              <td className="border p-2">{appointment.endTime}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleUpdate(appointment.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-3xl font-bold mb-4">Previous Appointments</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Email</th>
            <th className="border p-2">Appointment ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          {previousAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border p-2">{appointment.email}</td>
              <td className="border p-2">{appointment.id}</td>
              <td className="border p-2">{appointment.date}</td>
              <td className="border p-2">{appointment.startTime}</td>
              <td className="border p-2">{appointment.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
