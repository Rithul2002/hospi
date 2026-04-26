export default function Card({ title, value }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl">
      
      {/* Card Title */}
      <h3 className="text-sm font-medium text-gray-500">
        {title}
      </h3>

      {/* Card Value */}
      <p className="mt-2 text-4xl font-bold text-blue-600">
        {value}
      </p>

    </div>
  );
}