"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ManageSlots() {

  const router = useRouter();

  const [slots, setSlots] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");

  // Load saved slots
  useEffect(() => {
    const savedSlots = JSON.parse(localStorage.getItem("slots")) || [];
    setSlots(savedSlots);
  }, []);

  // Save slots
  const saveSlots = (updatedSlots) => {
    localStorage.setItem("slots", JSON.stringify(updatedSlots));
    setSlots(updatedSlots);
  };

  // Add new slot
  const addSlot = () => {

    if (!doctor || !time) return;

    const newSlot = {
      id: Date.now(),
      doctor: doctor,
      time: time,
      available: true
    };

    const updatedSlots = [...slots, newSlot];

    saveSlots(updatedSlots);

    setDoctor("");
    setTime("");
  };

  // Delete slot
  const deleteSlot = (id) => {

    const updatedSlots = slots.filter((slot) => slot.id !== id);

    saveSlots(updatedSlots);
  };

  // Toggle slot availability
  const toggleSlot = (id) => {

    const updatedSlots = slots.map((slot) => {
      if (slot.id === id) {
        return { ...slot, available: !slot.available };
      }
      return slot;
    });

    saveSlots(updatedSlots);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">

      {/* Back Button */}
      <button
        onClick={() => router.push("/admin")}
        className="mb-8 rounded-lg bg-blue-600 px-6 py-2 text-white shadow hover:bg-blue-700 transition"
      >
        ← Back to Admin
      </button>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Manage Appointment Slots
      </h1>

      {/* Add Slot Form */}
      <div className="bg-white p-8 rounded-xl shadow-md border mb-10">

        <h2 className="text-xl font-semibold text-gray-700 mb-5">
          Create New Slot
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Doctor Name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addSlot}
            className="bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow"
          >
            Add Slot
          </button>

        </div>

      </div>

      {/* Slots List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {slots.map((slot) => (

          <div
            key={slot.id}
            className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition"
          >

            <h3 className="text-lg font-bold text-gray-800">
              Dr. {slot.doctor}
            </h3>

            <p className="text-gray-600 mt-1">
              Time: {slot.time}
            </p>

            <p className={`mt-2 font-semibold ${slot.available ? "text-green-600" : "text-red-500"}`}>
              {slot.available ? "Available" : "Booked"}
            </p>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => toggleSlot(slot.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Toggle
              </button>

              <button
                onClick={() => deleteSlot(slot.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}