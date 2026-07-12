import { Bell } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo-light.png";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-8 shadow-sm">

      <div className="relative">

        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <Bell size={22} />
        </button>

        {showNotifications && (
          <div className="absolute right-0 mt-3 w-72 rounded-xl border border-[#E5E0D8] bg-white shadow-lg">

            <div className="border-b p-4 font-semibold">
              Notifications
            </div>

            <div className="p-4 text-sm text-gray-500">
              No notifications available.

              {/*
                Backend Placeholder

                Fetch notifications here
              */}
            </div>

          </div>
        )}

      </div>

    </nav>
  );
}