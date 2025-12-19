import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import LineParticles from '../../../Components/LineParticles';
import DatePicker from 'react-datepicker';

const EditContestPage = () => {


    const {
       register,
       handleSubmit,
       control,
       formState: { errors },
     } = useForm({});



     const onSubmit = (data) => {
         console.log(data)
     }
   




    return (
        <div className="min-h-screen  flex items-center justify-center py-5">
      <LineParticles></LineParticles>
      {/* Glass Card */}
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-white bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">
          Create New Contest
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Contest Name
            </label>
            <input
              {...register("name", { required: "Contest name is required" })}
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition"
              placeholder="contest Name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Contest Banner Image
            </label>
            <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-purple-400 transition">
              <input
                type="file"
                accept="image/*"
                {...register("image", {
                  required: "Contest image is required",
                })}
                className="hidden"
                id="image"
              />
              <label
                htmlFor="image"
                className="cursor-pointer text-purple-300 hover:text-purple-100"
              >
                <span className="text-2xl">📸</span>
                <p className="mt-2">Click to upload contest image</p>
              </label>
            </div>
            {errors.image && (
              <p className="text-red-400 text-sm mt-2">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Description & Task Instruction - Grid for better look */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={4}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                placeholder="What is this contest about?"
              />
              {errors.description && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* task instruction */}

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Task Instruction
              </label>
              <textarea
                {...register("taskInstruction", {
                  required: "Task instruction is required",
                })}
                rows={4}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                placeholder="What should participants submit?"
              />
              {errors.taskInstruction && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.taskInstruction.message}
                </p>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Entry Fee (TK)
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "rice is required",
                  min: { value: 0, message: "Price cannot be negative" },
                  valueAsNumber: true,
                })}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                placeholder="500"
              />
              {errors.price && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* price money */}

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Prize Money (TK)
              </label>
              <input
                type="number"
                {...register("prizeMoney", {
                  required: "Prize money is required",
                  min: {
                    value: 0,
                    message: "Price money cannot be negative",
                  },
                  valueAsNumber: true,
                })}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                placeholder="10000"
              />
              {errors.prizeMoney && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.prizeMoney.message}
                </p>
              )}
            </div>
          </div>

          {/* Contest Type & Deadline */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Contest Type
              </label>
              <select
                {...register("contestType", {
                  required: "Contest type is required",
                })}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
              >
                <option value="" className="bg-gray-900">
                  Select type
                </option>
                <option value="logo-design" className="bg-gray-900">
                  Logo Design
                </option>
                <option value="web-design" className="bg-gray-900">
                  Web Design
                </option>
                <option value="graphic-design" className="bg-gray-900">
                  Graphic Design
                </option>
                <option value="coding" className="bg-gray-900">
                  Coding Challenge
                </option>
                <option value="writing" className="bg-gray-900">
                  Writing
                </option>
                <option value="other" className="bg-gray-900">
                  Other
                </option>
              </select>
              {errors.contestType && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.contestType.message}
                </p>
              )}
            </div>

            {/* date and time select */}

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Deadline
              </label>
              <Controller
                control={control}
                name="deadline"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20"
                    placeholderText="Select date & time"
                  />
                )}
              />
              {errors.deadline && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.deadline.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button - Gradient Glow */}

  
            <button
              type="submit"
              className="w-full py-5 mt-10 text-lg font-bold text-white rounded-xl bg-linear-to-r from-indigo-600 to-purple-700  shadow-lg hover:shadow-blue-500/10 transform hover:scale-105 transition duration-300 cursor-pointer"
            >
              {/* {isPending ? <BeatLoader color="white" /> : 'Launch Contest 🚀'} */}
              'Launch Contest 🚀'
            </button>
         
        </form>
      </div>
    </div>
    );
};

export default EditContestPage;