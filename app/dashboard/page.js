import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Total Doctors" value="4" />
          <Card title="Total Patients" value="22" />
          <Card title="Available Slots" value="10" />
        </div>

      </div>
    </div>
  );
}