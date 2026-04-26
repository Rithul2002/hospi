"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DoctorsPage() {
  const router = useRouter();

  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("doctors");
    if (stored) {
      setDoctors(JSON.parse(stored));
    }
  }, []);

  const updateDoctors = (updatedList) => {
    localStorage.setItem("doctors", JSON.stringify(updatedList));
    setDoctors(updatedList);
  };

  const handleAddDoctor = () => {
    if (!name.trim() || !specialty.trim()) return;

    const newDoctor = {
      id: Date.now(),
      name,
      specialty,
    };

    const updatedList = [...doctors, newDoctor];
    updateDoctors(updatedList);

    setName("");
    setSpecialty("");
  };

  const handleDeleteDoctor = (id) => {
    const updatedList = doctors.filter((doc) => doc.id !== id);
    updateDoctors(updatedList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10">
      
      {/* Back Button */}
      <button
        onClick={() => router.push("/admin")}
        className="mb-6 rounded-lg bg-blue-600 px-6 py-2 text-white shadow transition hover:bg-blue-700"
      >
        ← Back to Admin
      </button>

      {/* Page Title */}
      <h1 className="mb-8 text-4xl font-bold text-gray-800">
        Doctors Management
      </h1>

      {/* Add Doctor Form */}
      <div className="mb-10 rounded-xl border bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Add New Doctor
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <input
            type="text"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="rounded-lg border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAddDoctor}
            className="rounded-lg bg-green-600 text-white shadow transition hover:bg-green-700"
          >
            Add Doctor
          </button>

        </div>
      </div>

      {/* Doctors List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border bg-white p-6 shadow transition hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {doc.name}
            </h2>

            <p className="mt-1 text-gray-600">
              {doc.specialty}
            </p>

            <button
              onClick={() => handleDeleteDoctor(doc.id)}
              className="mt-4 rounded bg-red-500 px-4 py-1 text-white transition hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}