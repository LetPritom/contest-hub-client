import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
  // Static demo data (later dynamic from backend)

  const axiosSecure = useAxiosSecure()

  const { user } = useAuth();

  const { data: runningUser = {} } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/currUser-data?email=${user?.email}`
      );

      return result.data;
    },
  });

  const { role, win, participated , image ,   name , address } = runningUser;

  console.log(runningUser);

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {

    try {
         const { name, image , address ,  } = data;

         const updateProfile = {
            name, 
            image,
            address,
            email:user?.email

         }

        const result =  await axiosSecure.patch(`/update-profile` , {updateProfile})
        console.log(result)
        toast.success('profile updated')
    } catch(err) {
        toast.error(err.message)
    }

       




  };

  const winPercentage = Math.round((win / participated) * 100);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b0f1a] via-[#0c1022] to-[#11152a] text-white">
      {/* Banner */}
      <div className="relative h-48 md:h-64 bg-linear-to-r from-purple-900/50 via-black/50 to-green-900/50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest text-white drop-shadow-lg">
          C O N T E S T &nbsp; H U B
        </h1>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto px-4 -mt-20">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 relative">
          {/* User Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-40 h-40 rounded-full ring-8 ring-purple-500/40 object-cover shadow-xl"
              />
              {/* Role Badge */}
              <span className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-xs font-bold shadow-lg">
                {role}
              </span>
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-extrabold">{user?.displayName}</h2>
              <p className="text-sm text-white/70">
                {address}
              </p>
              <p className="text-sm text-white/70">
                Passionate about contests and creative coding challenges
              </p>

              {/* Win Percentage Chart */}
              <div className="mt-6">
                <p className="text-sm uppercase tracking-wider text-white/60">
                  Win Percentage
                </p>
                <div className="w-full bg-white/10 rounded-full h-6 overflow-hidden mt-2">
                  <div
                    className="h-full bg-linear-to-r from-emerald-500 to-green-600 text-center text-xs font-bold flex items-center justify-center"
                    style={{ width: `${winPercentage}%` }}
                  >
                    {winPercentage}%
                  </div>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  {win} wins out of {participated} contests
                </p>
              </div>
            </div>
          </div>

          {/* Update Section */}

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-lg font-bold mb-4">Update Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name")}
                type="text"
                defaultValue={user?.displayName}
                placeholder="Update name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                {...register("image")}
                defaultValue={user?.photoURL}
                type="text"
                placeholder="Update photo URL"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

               <textarea
               defaultValue={address}
                {
                    ...register('address')
                }
                placeholder="Update address" className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button
                type="submit"
                className="px-12 my-5 cursor-pointer py-6 text-2xl font-bold text-white rounded-2xl bg-white/20 backdrop-blur-2xl border border-white hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/60 transform hover:scale-103 transition-all duration-500  flex justify-center items-center "
              >
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
