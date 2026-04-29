"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportsPage() {

  const router = useRouter();

  const [report, setReport] = useState({
    doctors: 0,
    patients: 0,
    slots: 0,
    availableSlots: 0,
    bookedSlots: 0
  });

  // Load data and create report
  useEffect(() => {

    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const slots = JSON.parse(localStorage.getItem("slots")) || [];

    const availableSlots = slots.filter(slot => slot.available).length;
    const bookedSlots = slots.filter(slot => !slot.available).length;

    setReport({
      doctors: doctors.length,
      patients: patients.length,
      slots: slots.length,
      availableSlots,
      bookedSlots
    });

  }, []);

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
        System Reports
      </h1>

      {/* Report Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition">
          <h3 className="text-gray-600 text-sm">Total Doctors</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {report.doctors}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition">
          <h3 className="text-gray-600 text-sm">Total Patients</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {report.patients}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition">
          <h3 className="text-gray-600 text-sm">Total Slots</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {report.slots}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition">
          <h3 className="text-gray-600 text-sm">Available Slots</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">
            {report.availableSlots}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border hover:shadow-xl transition">
          <h3 className="text-gray-600 text-sm">Booked Slots</h3>
          <p className="text-3xl font-bold text-red-500 mt-2">
            {report.bookedSlots}
          </p>
        </div>

      </div>

    </div>
  );
}