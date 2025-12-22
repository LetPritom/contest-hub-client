import { useQuery } from '@tanstack/react-query';
import useAuth from "../../../hooks/useAuth";
import React from 'react';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import ManageUserTable from '../TableData/ManageUserTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();

     const { data: users = [], isPending , refetch} = useQuery({
    queryKey: ["users", user?.email ],
    queryFn: async () => {
      const result = await axiosSecure(
        `/all-users`
      );
      return result.data;
    },
  });

  console.log(users)

  if(isPending) return <LoaderSpinner></LoaderSpinner>

    return (
        <div>
          <div className="w-11/12 mx-auto group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-green-500/30 hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative p-8 md:p-12 text-center flex items-center justify-center gap-6 cursor-pointer">

              {/* Text */}
              <div className="text-center">
                <p className="text-xl md:text-5xl font-extrabold text-white">
                  {users.length}
                </p>
                <p className="text-lg md:text-xl text-green-300 mt-2">
                  Total Users
                </p>
              </div>
            </div>
          </div>
            {
                users.map((user , i ) => <ManageUserTable refetch={refetch} key={i} user={user}></ManageUserTable>)
            }
        </div>
    );
};

export default ManageUsers;