import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/logo-light.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password does not meet security requirements.");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Call Login API");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg border border-[#E5E0D8]"
      >
        {/* Logo */}
        <div className="flex flex-col items-center ">
          <img
            src={Logo}
            alt="AssetFlow"
            className="w-24 h-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-[#748873]">
            Sign In
          </h1>

          <p className="mt-2 text-center text-sm text-gray-500">
            Manage, track and monitor organizational assets.
          </p>
        </div>

        {/* Email */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className="mt-2 w-full rounded-lg border border-[#E5E0D8] px-4 py-3 outline-none transition focus:border-[#748873]"
          />

          {emailError && (
            <p className="mt-1 text-sm text-red-500">
              {emailError}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              className="w-full rounded-lg border border-[#E5E0D8] px-4 py-3 pr-12 outline-none transition focus:border-[#748873]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {passwordError && (
            <p className="mt-1 text-sm text-red-500">
              {passwordError}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="text-sm text-[#748873] hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full rounded-lg bg-[#748873] py-3 font-semibold text-white transition hover:bg-[#667965]"
        >
          Sign In to AssetFlow
        </button>
      </form>
    </div>
  );
}