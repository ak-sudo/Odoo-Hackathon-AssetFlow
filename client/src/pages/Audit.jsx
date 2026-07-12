import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Audit() {

  /*
    Backend Placeholder

    Fetch audit cycles.

    API:
    GET /audit

    Future Features:
    - Create Audit Cycle
    - Assign Auditors
    - Close Cycle
  */

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Asset Audit
          </h1>

          <p className="mt-2 text-gray-500">
            Conduct and monitor organizational asset audits.
          </p>

          <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Audit Cycles
            </h2>

            <p className="mt-3 text-gray-500">
              Audit schedule and discrepancy reports will appear here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}