import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import useAuth from "../../hooks/useAuth";

const RegisterModal = ({ isOpen, closeModal, ContestDetails }) => {

    const{user} = useAuth()

    const {name , contestType , price} = ContestDetails;
    console.log(name)
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
  {/* Backdrop with stronger blur */}
  <div className="fixed inset-0 bg-black/60 backdrop-blur-md" />

  <div className="flex min-h-full items-center justify-center p-4">
    <DialogPanel
      transition
      className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
    >
      {/* Optional subtle inner gradient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/5 to-pink-600/5 rounded-3xl" />

      <div className="relative p-8 space-y-8 text-white">
        {/* title */}


        <DialogTitle as="h3" className="text-center text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Review Info Before join
        </DialogTitle>

        {/* contest er info*/}


        <div className="space-y-5 text-lg">
          <div className="flex justify-between items-center bg-white/5 rounded-xl px-5 py-3 border border-white/10">
            <span className="text-purple-200">Contest Name :</span>
            <span className="font-semibold">{name}</span>
          </div>

          <div className="flex justify-between items-center bg-white/5 rounded-xl px-5 py-3 border border-white/10">
            <span className="text-purple-200">Contest Type :</span>
            <span className="font-semibold">{contestType}</span>
          </div>

          <div className="flex justify-between items-center bg-white/5 rounded-xl px-5 py-3 border border-white/10">
            <span className="text-purple-200">Participant :</span>
            <span className="font-semibold">{user?.displayName}</span>
          </div>

          <div className="flex justify-between items-center bg-white/5 rounded-xl px-5 py-3 border border-white/10">
            <span className="text-purple-200">Entry Price :</span>
            <span className="font-bold text-2xl text-pink-300">$ {price}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={'handlePayment'} // তোর function name change করিস যদি অন্য হয়
            className="flex-1 py-4 text-lg font-bold text-white cursor-pointer rounded-2xl bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 "
          >
            Confirm & Pay
          </button>

          <button
            onClick={closeModal}
            className="flex-1 cursor-pointer py-4 text-lg font-bold text-white rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </DialogPanel>
  </div>
</div>
    </Dialog>
  );
};

export default RegisterModal;
