import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/logo-light.png";
import axios from 'axios'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Employee",
  });

  const [backendMessage, setBackendMessage] = useState("");
  const [showBackendMessage, setShowBackendMessage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    let valid = true;

    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    const passwordRegex = /@/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character.";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (validate()) {
      try {
        const res = await axios.post(
          "http://localhost:3000/app/auth/register",
          formData
        );
        const msg = res?.data?.message || "Signup successful";
        setBackendMessage(msg);
        setShowBackendMessage(true);
        setTimeout(() => setShowBackendMessage(false), 4000);

        // write code to redirect to dashboard page
      } catch (err) {
        const msg = err?.response?.data?.message || "An error occurred";
        setBackendMessage(msg);
        setShowBackendMessage(true);
        setTimeout(() => setShowBackendMessage(false), 6000);
      }
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8] px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-[#E5E0D8] bg-white p-8 shadow-lg"
      >
        <div className="flex flex-col items-center">
          <img src={Logo} alt="AssetFlow" className="w-24 mb-4" />

          <h1 className="text-3xl font-bold text-[#748873]">Create Account</h1>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Sunil kumar"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#E5E0D8] px-4 py-3 outline-none focus:border-[#748873]"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#E5E0D8] px-4 py-3 outline-none focus:border-[#748873]"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5E0D8] px-4 py-3 pr-12 outline-none focus:border-[#748873]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#E5E0D8] px-4 py-3 outline-none focus:border-[#748873]"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>

          <input
            type="text"
            value={formData.role}
            disabled
            className="mt-2 w-full cursor-not-allowed rounded-lg border border-[#E5E0D8] bg-gray-100 px-4 py-3 text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-lg bg-[#748873] py-3 font-semibold text-white transition hover:bg-[#667965]"
        >
          Create Account
        </button>
      </form>{" "}
      {/* Backend message (bottom center) */}
      {showBackendMessage && (
        <div className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50">
          <div className="rounded-md bg-[#111827]/90 text-white px-4 py-2 shadow-lg">
            {backendMessage}
          </div>
        </div>
      )}
    </div>
  );
}
