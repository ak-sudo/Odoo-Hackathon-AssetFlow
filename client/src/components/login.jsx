import { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Boxes,
} from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070A09] px-4 py-6 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0D1110]/95 shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-3xl">
        {/* Header */}
        <header className="border-b border-white/10 px-5 py-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-2">
            <Boxes size={20} className="text-emerald-400" />

            <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              AssetFlow
              <span className="mx-2 text-white/20">—</span>
              Login
            </h1>
          </div>
        </header>

        <main className="px-5 py-7 sm:px-9 sm:py-9">
          {/* Logo */}
          <div className="mb-7 flex justify-center sm:mb-9">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-400/5 sm:h-20 sm:w-20">
                <span className="text-lg font-bold text-emerald-400 sm:text-xl">
                  AF
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                autoComplete="email"
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-emerald-400/70 focus:ring-4 focus:ring-emerald-400/10 sm:h-14"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-emerald-400/70 focus:ring-4 focus:ring-emerald-400/10 sm:h-14"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-emerald-400"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  className="text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 text-sm font-semibold text-[#07100C] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_15px_40px_rgba(52,211,153,0.15)] active:translate-y-0 sm:h-14"
            >
              Sign in to AssetFlow

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:my-8" />

          {/* Signup */}
          <section>
            <h2 className="mb-3 text-sm font-medium text-white/70">
              New here?
            </h2>

            <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-emerald-400"
              />

              <p className="text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                Sign up creates an employee account. Administrative roles are
                assigned later.
              </p>
            </div>

            <button
              type="button"
              className="group mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] text-sm font-medium text-white/70 transition hover:border-emerald-400/50 hover:bg-emerald-400/5 hover:text-emerald-400"
            >
              Create Account

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </section>

          {/* Security */}
          <div className="mt-7 flex items-center justify-center gap-2 text-center text-[10px] text-white/25 sm:text-xs">
            <ShieldCheck size={13} />
            Secure enterprise asset workspace
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;