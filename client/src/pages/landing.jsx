import Logo from "../assets/logo-light.png";

export default function Landing({ onSignIn }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-4">
      <div className="w-36rem max-w-xl rounded-2xl border border-[#E5E0D8] bg-white p-10 shadow-lg">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="AssetFlow"
            className="h-24 w-auto"
          />
        </div>

        {/* Title */}
        <div className="mt-6 text-center">

          <p className="mt-4 text-lg text-gray-600">
            Enterprise Asset Management System
          </p>

          <p className="mt-3 leading-7 text-gray-500">
            Streamline asset allocation, booking through one secure,
            centralized platform.
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button
            onClick={onSignIn}
            className="w-full rounded-lg bg-[#748873] py-3 text-lg font-semibold text-white transition hover:bg-[#667965]"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}