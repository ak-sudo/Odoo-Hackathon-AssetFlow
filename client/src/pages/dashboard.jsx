import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  /*
      Backend Placeholder

      Replace this object with API response.

      Example:

      const [dashboardData, setDashboardData] = useState({});

      useEffect(()=>{
          axios.get("/api/dashboard")
          .then(res=>setDashboardData(res.data))
      },[])
  */

  const dashboardData = {
    available: 120,
    allocated: 74,
    maintenance: 8,
    bookings: 21,
    transfers: 5,
    returns: 12,
  };

  return (
    <div className="flex bg-[#F8F8F8]">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Operational overview of AssetFlow.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Assets Available</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.available}
              </h2>
            </div>

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Assets Allocated</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.allocated}
              </h2>
            </div>

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Maintenance Today</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.maintenance}
              </h2>
            </div>

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Active Bookings</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.bookings}
              </h2>
            </div>

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Pending Transfers</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.transfers}
              </h2>
            </div>

            <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 shadow-sm">
              <p className="text-gray-500">Upcoming Returns</p>
              <h2 className="mt-3 text-4xl font-bold text-[#748873]">
                {dashboardData.returns}
              </h2>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}