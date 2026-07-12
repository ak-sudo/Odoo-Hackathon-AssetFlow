import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8F8F8]">
      <img src="/logo.png" alt="logo" className="w-28 mb-6" />

      <h1 className="text-4xl font-bold text-[#748873]">AssetFlow</h1>

      <p className="text-center text-gray-600 max-w-md mt-4">
        Manage, track, allocate and maintain organizational assets.
      </p>

      <button
        onClick={() => navigate("/login")}
        className="mt-8 bg-[#748873] hover:bg-[#647763] text-white px-8 py-3 rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
}