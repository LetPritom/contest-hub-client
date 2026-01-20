import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { saveOrUpdateUser } from "../../Utils";

const Signin = () => {
  const { signInWithGoogleFunc, signInWithEmailAndPassFunc, setLoading, user } =
    useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const { email, password } = data;
    await signInWithEmailAndPassFunc(email, password);
    saveOrUpdateUser({
      name: user?.displayName,
      image: user?.photoURL,
      email,
      win: 0,
      participated: 0,
      address: "Jashore Khulna Bangladesh",
    });
    setLoading(false);
    navigate(from);
    toast.success("successfully Login");
  };

  const handleGoogleSignin = async () => {
    try {
      const { user } = await signInWithGoogleFunc();
      saveOrUpdateUser({
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
        win: 0,
        participated: 0,
        address: "Jashore Khulna Bangladesh",
      });
      navigate(from);
      console.log(user);
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-black to-purple-900 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md m-5">
        {/* Glassmorphism Card */}

        <div className="bg-black/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-10 animate-fade-in">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
              Log in
            </h2>
            <p className="text-white/70 text-lg">See Contest And Join!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />

              {errors.email && (
                <p className="text-xs mt-2 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password should be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "Password must contain at least one uppercase letter and one lowercase letter",
                  },
                })}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              {errors.password && (
                <p className="text-xs mt-2 text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/30 cursor-pointer"
            >
              Login
            </button>

            {/* google signup */}

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="flex items-center justify-center gap-3 w-full border border-white cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-white/60 mt-8">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-white font-semibold hover:text-purple-300 transition"
            >
              signup
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
