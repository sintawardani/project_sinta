import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
    {/* Kartu Statistik */}
    <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-500 text-white p-4 rounded shadow">9,823 Members Online</div>
          <div className="bg-blue-400 text-white p-4 rounded shadow">9,823 Members Online</div>
          <div className="bg-yellow-400 text-white p-4 rounded shadow">9,823 Members Online</div>
          <div className="bg-red-400 text-white p-4 rounded shadow">9,823 Members Online</div>
        </div>

        {/* Chart Section */}
        <div className="mt-6 bg-gray-800 p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic</h3>
          <div className="h-64 bg-gray-700 rounded"></div>
        </div>
      </div>
  );
}  
