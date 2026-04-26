"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear admin authentication
    localStorage.removeItem("adminAuth");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between h-16 w-full bg-white px-8 shadow-md">

      {/* Dashboard Title */}
      <h2 className="text-2xl font-bold text-gray-800">
        Dashboard
      </h2>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => router.push("/admin")}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Admin
        </button>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}