import {
  LayoutDashboard,
  Building2,
  Boxes,
  Repeat,
  Calendar,
  Wrench,
  ClipboardCheck,
  BarChart3,
  LogOut,
} from "lucide-react";
import Logo from "../assets/logo-light.png";


export default function Sidebar() {

  const menu = [
    { icon: LayoutDashboard, name: "Dashboard" },
    { icon: Building2, name: "Organization" },
    { icon: Boxes, name: "Assets" },
    { icon: Repeat, name: "Allocation" },
    { icon: Calendar, name: "Booking" },
    { icon: Wrench, name: "Maintenance" },
    { icon: ClipboardCheck, name: "Audit" },
    { icon: BarChart3, name: "Reports" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">

      <img src={Logo} alt="AssetFlow" className="w-24 h-auto mb-4"/>  

      <div className="flex-1 mt-4">

        {menu.map((item) => (
          <button
            key={item.name}
            className="flex w-full items-center gap-3 px-6 py-4 text-gray-700 transition hover:bg-[#748873] hover:text-white"
          >
            <item.icon size={20} />
            {item.name}
          </button>
        ))}

      </div>

      <button className="m-5 flex items-center gap-2 rounded-lg border px-4 py-3 text-red-500 hover:bg-red-50">
        <LogOut size={18} />
        Logout
      </button>

    </aside>
  );
}