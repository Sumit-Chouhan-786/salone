import React, { useEffect, useState } from "react";

const BookAppointment = () => {
  // State to hold services fetched from the backend
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  // Fetch services from backend API when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("https://api.example.com/services");
        const data = await response.json();
        setServices(data); // Assuming data is an array of services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Handle service selection
  const handleServiceChange = (event) => {
    const { value, checked } = event.target;
    setSelectedServices(
      (prevSelectedServices) =>
        checked
          ? [...prevSelectedServices, value] // Add the selected service
          : prevSelectedServices.filter((service) => service !== value) // Remove if unchecked
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare the data to send to the backend
    const formData = {
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      time: event.target.time.value,
      services: selectedServices,
    };

    // Replace with your API call to book the appointment
    console.log("Booking data:", formData);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center mt-10">Book Appointment</h1>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[500px] border-2 border-gray-300 p-4 rounded-md gap-4"
        >
          <label htmlFor="startDate">Start Date</label>
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            type="date"
            id="startDate"
            placeholder="Start Date"
          />
          <label htmlFor="endDate">End Date</label>
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            type="date"
            id="endDate"
            placeholder="End Date"
          />
          <label htmlFor="time">Time</label>
          <input
            className="border-2 border-gray-300 p-2 rounded-md"
            type="time"
            id="time"
            placeholder="Time"
          />
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Services:</p>
            {services.length > 0 ? (
              services.map((service) => (
                <label key={service.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service.name}
                    onChange={handleServiceChange}
                  />
                  {service.name}
                </label>
              ))
            ) : (
              <p>Loading services...</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
