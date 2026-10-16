
import { useState } from "react";

const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto mt-20 max-w-100 rounded-xl border border-cyan-400/30 p-6  shadow-2xl shadow-blue-950/40 mb-20">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full rounded-lg border bg-white border-gray-300 px-4 py-3 outline-none focus:border-blue-500 "
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
        className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default PasswordToggle;
