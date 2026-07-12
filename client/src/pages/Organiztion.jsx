import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Organization() {

  /*
    Backend Placeholder

    APIs:

    GET /departments
    GET /categories
    GET /employees

    Future Features:
    - Department Management
    - Asset Categories
    - Employee Directory
  */

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Organization Setup
          </h1>

          <p className="mt-2 text-gray-500">
            Configure departments, asset categories and employees.
          </p>

          <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Organization Management
            </h2>

            <p className="mt-3 text-gray-500">
              Department management, asset categories and employee directory will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}