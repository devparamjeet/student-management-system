import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      {/* Navbar */}
      <nav className="bg-neutral-800 px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-300">Hello, User</span>
          <img
            src="https://ui-avatars.com/api/?name=User"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-neutral-800 p-5 hidden md:block">
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">🏠 Dashboard</li>
            <li className="hover:text-white cursor-pointer">👤 Profile</li>
            <li className="hover:text-white cursor-pointer">📊 Analytics</li>
            <li className="hover:text-white cursor-pointer">⚙️ Settings</li>
            <li className="hover:text-red-400 cursor-pointer">🚪 Logout</li>
          </ul>
        </aside>

        {/* Dashboard Content */}
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
      </div>
    </div>
  );
};

export default App;
