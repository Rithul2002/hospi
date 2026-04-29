"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <aside className="h-screen w-64 bg-gray-900 p-6 text-white">

      {/* Sidebar Title */}
      <h1 className="mb-10 text-2xl font-bold tracking-wide">
        Dashboard
      </h1>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-4">

          <li
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer rounded-md px-2 py-1 transition hover:text-gray-400"
          >
            Home
          </li>

          <li
            onClick={() => navigate("/users")}
            className="cursor-pointer rounded-md px-2 py-1 transition hover:text-gray-400"
          >
            Doctors
          </li>

        </ul>
      </nav>

    </aside>
  );
}