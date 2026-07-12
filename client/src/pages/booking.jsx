import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Booking() {

  /*
    Backend Placeholder

    Fetch bookings.

    Calendar API integration here.
  */

  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Resource Booking
          </h1>

          <p className="mt-2 text-gray-500">
            Book and manage shared organizational resources.
          </p>

          <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Booking Calendar
            </h2>

            <p className="mt-3 text-gray-500">
              Calendar and booking schedule will appear here after backend integration.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}