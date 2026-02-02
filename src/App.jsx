import React from "react";
import Sidebar from "./components/Sidebar";
import UserNavbar from "./components/UserNavbar";

const App = () => {
  return (
    <main className="flex-1 p-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-neutral-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-400">Total Projects</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-400">Completed</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-400">Pending</h3>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-neutral-800 rounded-xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-300">
          <li>✅ Project “Dashboard UI” completed</li>
          <li>📁 New project “Portfolio Website” added</li>
          <li>⚙️ Profile updated</li>
        </ul>
      </div>

    </main>
  );
};

export default App;
