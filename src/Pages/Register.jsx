import { Zap, User, Mail, Lock, Eye, ArrowRight, Watch } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SkyMartContext } from "../Context/ContextProvider";

export default function Register() {
  const { users, setUsers, setSession } = useContext(SkyMartContext);
  const getUsers = JSON.parse(localStorage.getItem("users")) || [];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });
  const passwordValue = watch("password");

  const formData = (data) => {
    const userFound = getUsers.find((u) => u.email == data.email);

    if (userFound) {
      alert("Email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      avatar: data.fullname.slice(0, 1).toUpperCase(),
      name: data.fullname,
      email: data.email,
      password: data.password,
    };

    const updatedData = users ? [...users, newUser] : [newUser];
    const { password, ...session } = newUser;

    setUsers(updatedData);
    setSession({ ...session });

    localStorage.setItem("users", JSON.stringify(updatedData));
    localStorage.setItem("session", JSON.stringify({ ...session }));
    navigate('/')
    reset();
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 py-16">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-lg bg-[#d4ff2f] flex items-center justify-center">
          <Zap className="w-5 h-5 text-black" fill="black" />
        </div>
        <span className="text-white text-xl font-bold">
          Sky<span className="text-[#d4ff2f]">Mart</span>
        </span>
      </div>

      <form
        onSubmit={handleSubmit(formData)}
        className="w-full max-w-sm bg-[#111111] border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-white text-2xl font-bold mb-1">Create account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Join SkyMart and start shopping
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <User className="w-4 h-4 text-gray-500" />
              {/* <span className="text-gray-500 text-sm">Full name</span> */}
              <input
                className="text-white outline-none border-none bg-transparent"
                {...register("fullname", {
                  required: "Please enter your full name",
                })}
                placeholder="Full name"
              />
            </div>
            {errors.fullname && (
              <p style={{ color: "red" }}>{errors.fullname.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <input
                className="text-white outline-none border-none bg-transparent"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    message: "Invalid email format",
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  },
                })}
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <Lock className="w-4 h-4 text-gray-500" />
              <input
                className="w-full text-white outline-none border-none bg-transparent"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters long",
                  },
                })}
                placeholder="Password"
              />
              <Eye
                onClick={() => setShowPassword((prev) => !prev)}
                className="cursor-pointer w-4 h-4 text-gray-500"
              />
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3">
              <Lock className="w-4 h-4 text-gray-500" />
              <input
                className="text-white outline-none bg-transparent border-none w-full"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmpassword", {
                  required: "Please confirm your passowrd",
                  validate: (value) => {
                    value === passwordValue || "Password do not match";
                  },
                })}
                placeholder="Confirm password"
              />
              <Eye
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="cursor-pointer w-4 h-4 text-gray-500"
              />
            </div>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </div>

          <button className="w-full bg-[#d4ff2f] text-black font-semibold rounded-lg py-3 flex items-center justify-center gap-2">
            Create Account
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-gray-500 text-sm pt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#d4ff2f] cursor-pointer font-semibold"
            >
              Sign in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
