import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import MyWinningTable from '../TableData/MyWinningTable';

const MyWinningContests = () => {

      const { user } = useAuth();
      const axiosSecure = useAxiosSecure();
    
      const { data:MyWinning = [],  isPending } = useQuery({
        queryKey: ["myWinning", user?.email],
        queryFn: async () => {
          const result = await axiosSecure(
            `${import.meta.env.VITE_API_URL}/my-winning?email=${user?.email}`
          );
          return result.data;
          
        },
      });

      console.log(MyWinning)

      if(MyWinning.length === 0 || undefined) return <p className='text-2xl my-10 text-center text-white'>You have not won any contest yet</p>


      if(isPending) return <LoaderSpinner></LoaderSpinner>
      
    
     
    
    return (
        <div>

             <h1 className='text-2xl text-center my-12 text-white font-semibold'>You are won contest</h1>
             {
                <div className="w-10/12 mx-auto space-y-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        MyWinning.map((winner , i ) => <MyWinningTable key={i} winner={winner}></MyWinningTable>)
                    }
                    
                     </div>
             }
              
        </div>
    );
};

export default MyWinningContests;