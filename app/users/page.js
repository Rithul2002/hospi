import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function Users() {

  const users = [
    { id: 1, Doctors: "John Doe", Patients: 5, Slot_remaining: "3" },
    { id: 2, Doctors: "Anna Smith", Patients: 3, Slot_remaining: "2" },
    { id: 3, Doctors: "David Lee", Patients: 8, Slot_remaining: "1" },
    { id: 4, Doctors: "Sarah Khan", Patients: 6, Slot_remaining: "4" }
  ];

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
             Doctors and Patients Overview
          </h1>

          {/* Table Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full text-left">

              {/* Table Head */}
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4">Doctors</th>
                  <th className="p-4">Patients</th>
                  <th className="p-4">Slot_remaining</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>

                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-100 transition"
                  >

                    <td className="p-4 font-medium text-gray-700">
                      {user.Doctors}
                    </td>

                    <td className="p-4 text-blue-600 font-semibold">
                      {user.Patients}
                    </td>

                    <td className="p-4 text-green-600 font-semibold">
                      {user.Slot_remaining}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}