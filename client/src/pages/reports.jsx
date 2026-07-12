import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Reports() {

  /*
    Backend Placeholder

    Fetch analytics.

    API:
    GET /reports

    Future Features:
    - Asset Utilization
    - Booking Heatmap
    - Maintenance Analytics
    - Export Reports
  */

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Reports & Analytics
          </h1>

          <p className="mt-2 text-gray-500">
            Analyze asset utilization and operational performance.
          </p>

          <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Reports Dashboard
            </h2>

            <p className="mt-3 text-gray-500">
              Charts, analytics and export options will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}