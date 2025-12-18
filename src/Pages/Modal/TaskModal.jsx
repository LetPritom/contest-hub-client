import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";

const TaskModal = ({submit , cancelSubmit}) => {



  return (
    <div>
      <Dialog
        open={submit}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={cancelSubmit}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          {/* Strong Dark Backdrop with Blur */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />

          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              {/* Subtle Inner Gradient Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-pink-600/10 rounded-3xl" />

              <div className="relative p-10 space-y-10 text-white">
                {/* Title */}
                <DialogTitle
                  as="h3"
                  className="text-center text-4xl font-extrabold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Submit Your Task
                </DialogTitle>

                {/* Description Text */}
                <p className="text-center text-lg text-purple-200">
                  Provide all necessary links (Google Drive, Dropbox, Behance,
                  GitHub, etc.) or details below.
                </p>

                {/* Big Textarea */}
                <div className="relative">
                  <textarea
                    // value={submissionText}
                    // onChange={(e) => setSubmissionText(e.target.value)}
                    rows={10}
                    placeholder="Paste your submission links and any additional notes here..."
                    className="w-full px-6 py-5 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 resize-none transition-all duration-300"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-5">
                  {/* Submit Button */}
                  <button
                    onClick={`handleSubmitTask`}
                    className="flex-1 py-5 text-xl font-bold text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 cursor-pointer "
                  >
                    Submit Task 🚀
                  </button>

                  {/* Cancel Button */}
                  <button
                    onClick={cancelSubmit}
                    className="flex-1 py-5 text-xl font-bold text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 cursor-pointer "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TaskModal;
