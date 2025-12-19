import React from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import CreatorContestTable from '../TableData/CreatorContestTable';

const MyCreateContestPage = () => {

    const {user} = useAuth()

     const {data : creatorContest = [] , isPending , refetch} = useQuery({
        queryKey:['creatorContest' , user?.email] ,
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/creator-contest?email=${user?.email}`)
            return result.data;
        }
    })

    console.log(creatorContest)


    if(isPending) return <LoaderSpinner></LoaderSpinner>
    return (
        <div>

            {
            creatorContest.map((creator , i) => <CreatorContestTable refetch={refetch} key={i} creator={creator}></CreatorContestTable>)
           }


        </div>
    );
};

export default MyCreateContestPage;