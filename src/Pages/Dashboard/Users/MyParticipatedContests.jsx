import React from 'react';
import LineParticles from '../../../Components/LineParticles';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import MyContestTable from '../TableData/MyContestTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParticipatedContests = () => {

  const axiosSecure = useAxiosSecure()

    const {user} = useAuth()
    const { data: games = [] , refetch , isPending } = useQuery({
        queryKey: ["games", user?.email],
        queryFn: async () => {
          const result = await axiosSecure(
            `/my-contest?email=${user?.email}`
          );
    
          return result.data;
        },
      });

      console.log(games)

      if(isPending) return <LoaderSpinner></LoaderSpinner>
    return (
        <div>
            <LineParticles></LineParticles>

            <div>
           {
            games.map((game , i) => <MyContestTable key={i} refetch={refetch} game={game}></MyContestTable>)
           }
        </div>
          {/* <TableData></TableData> */}
        </div>
    );
};

export default MyParticipatedContests;