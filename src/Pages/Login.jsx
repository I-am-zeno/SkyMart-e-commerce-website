import { Zap, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SkyMartContext } from "../Context/ContextProvider";

export default function Login() {
  const { setSession, users } = useContext(SkyMartContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formData = (data) => {
    const userFound = users.find((u) => u.email == data.email);

    if (!userFound) {
      alert("Invalid email or password");
      return;
    }

    const { password, ...cleanUser } = userFound;

    setSession({ ...cleanUser });
    localStorage.setItem('session', JSON.stringify({...cleanUser}))

    navigate("/")
  };

  return (
    <div className="min-h-screen w-full bg-black flex">
      {/* Left panel */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-center px-16 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d4ff2f 0%, transparent 70%)",
          }}
        />

        <div className="relative flex items-center gap-2 mb-24">
          <div className="w-9 h-9 rounded-lg bg-[#d4ff2f] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" fill="black" />
          </div>
          <span className="text-white text-xl font-bold">
            Sky<span className="text-[#d4ff2f]">Mart</span>
          </span>
        </div>

        <div className="relative">
          <p className="text-[#d4ff2f] text-xs font-bold tracking-[0.2em] mb-4">
            WELCOME BACK
          </p>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-1">
            Shop the future.
          </h1>
          <h1 className="text-5xl font-extrabold text-[#d4ff2f] leading-tight mb-6">
            Today.
          </h1>
          <p className="text-gray-400 text-base max-w-sm mb-10">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          <div className="flex gap-4">
            {[
              { value: "20K+", label: "Products" },
              { value: "50K+", label: "Users" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/15 rounded-xl px-6 py-4 text-center"
              >
                <div className="text-[#d4ff2f] text-lg font-bold">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-[#0a0a0a]">
        <form
          onSubmit={handleSubmit(formData)}
          className="w-full max-w-sm bg-[#111111] border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-white text-2xl font-bold mb-1">Sign in</h2>
          <p className="text-gray-500 text-sm mb-6">
            Enter your credentials to continue
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <input
                  {...register("email", {
                    required: "Email address is required.",
                  })}
                  placeholder="Email address"
                  className="outline-none text-white border-none bg-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <input
                  className="text-white outline-none border-none w-full bg-transparent"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Passwrod"
                />
                <Eye
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer w-4 h-4 text-gray-500"
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button className="w-full bg-[#d4ff2f] text-black font-semibold rounded-lg py-3 flex items-center justify-center gap-2">
              Sign in
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-gray-500 text-sm pt-2">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-[#d4ff2f] cursor-pointer font-semibold"
              >
                Create one
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
