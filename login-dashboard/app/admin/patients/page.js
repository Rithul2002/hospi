"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PatientsPage() {
  const router = useRouter();

  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Load patients from localStorage
  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);
  }, []);

  // Save patients
  const savePatients = (updatedList) => {
    localStorage.setItem("patients", JSON.stringify(updatedList));
    setPatients(updatedList);
  };

  // Add patient
  const addPatient = () => {
    if (!name || !age) return;

    const newPatient = {
      id: Date.now(),
      name: name,
      age: age,
    };

    const updatedList = [...patients, newPatient];
    savePatients(updatedList);

    setName("");
    setAge("");
  };

  // Delete patient
  const deletePatient = (id) => {
    const updatedList = patients.filter((patient) => patient.id !== id);
    savePatients(updatedList);
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
        Manage Patients
      </h1>

      {/* Add Patient Form */}
      <div className="bg-white p-8 rounded-xl shadow-md border mb-10">

        <h2 className="text-xl font-semibold text-gray-700 mb-5">
          Add New Patient
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Patient Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addPatient}
            className="bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow"
          >
            Add Patient
          </button>

        </div>

      </div>

      {/* Patient List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition"
          >

            <h3 className="text-xl font-bold text-gray-800">
              {patient.name}
            </h3>

            <p className="text-gray-600 mt-2">
              Age: {patient.age}
            </p>

            <button
              onClick={() => deletePatient(patient.id)}
              className="mt-4 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}