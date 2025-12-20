import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { saveOrUpdateUser } from "../../Utils";

const SignUp = () => {
  const {
    signInWithGoogleFunc,
    registerEmailAndPassFunc,
    updateProfileFunction,
    setLoading,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, password, image, email } = data;

    try {
      const result =await registerEmailAndPassFunc(email, password);
      saveOrUpdateUser({name , email , image , win:0})
      setLoading(false);

      await updateProfileFunction(name, image);

      setLoading(false);

      navigate(from);


      toast.success("signup successful");
      console.log(result);

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
    console.log({ password, name });
  };

  const handleGoogleSignin = async () => {
    try {
      const { user } = await signInWithGoogleFunc();
      saveOrUpdateUser({
        name:user?.displayName,
        image:user?.photoURL,
        email:user?.email,
        win:0

      })
      
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-black to-purple-900 flex items-center justify-center px-4 py-16">
      <div className="w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="text-center rounded-full  mb-10 flex-1 bg-black/10 backdrop-blur-2xl shadow-2xl border border-white/10 p-10">
          <div className="align flex flex-col justify-center items-center h-52 ">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
              Join Contest Hub!
            </h2>
            <p className="text-white/70 text-lg">
              Create your account and start competing today
            </p>
          </div>
        </div>

        {/* Glassmorphism Card */}

        <div className="bg-black/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-10 animate-fade-in flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              {errors.name && (
                <p className=" text-xs mt-2 text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Photo URL
              </label>
              <input
                type="url"
                {...register("image", { required: "Image url is required" })}
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              {errors.image && (
                <p className="text-xs mt-2 text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white/90 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "please enter a valid email",
                })}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              {errors.email && (
                <p className=" text-xs mt-2 text-red-500">
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
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters long",
                  },
                })}
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500/70 transition-all duration-300"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/30 cursor-pointer"
            >
              Signup
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
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-white font-semibold hover:text-purple-300 transition"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
