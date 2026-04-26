"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function AdminPage() {

  const router = useRouter();

  const adminOptions = [
    {
      title: "Manage Doctors",
      description: "Add, edit or delete doctors from the system.",
      icon: "👨‍⚕️",
      path: "/admin/doctors"
    },
    {
      title: "Manage Patients",
      description: "View patient appointments.",
      icon: "🧑‍🤝‍🧑",
      path: "/admin/patients"
    },
    {
      title: "Manage Slots",
      description: "Control available time slots.",
      icon: "📅",
      path: "/admin/slots"
    },
    {
      title: "Reports",
      description: "View hospital reports.",
      icon: "📊",
      path: "/admin/reports"
    }
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-10">

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Admin Dashboard
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {adminOptions.map((item, index) => (

              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="bg-white rounded-2xl p-8 shadow-md border hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer group"
              >

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>

                {/* Button */}
                <button className="mt-4 text-blue-600 font-medium group-hover:underline">
                  Open →
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}