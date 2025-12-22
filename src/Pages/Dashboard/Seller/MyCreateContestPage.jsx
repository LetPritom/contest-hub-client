import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import CreatorContestTable from '../TableData/CreatorContestTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyCreateContestPage = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

     const {data : creatorContest = [] , isPending , refetch} = useQuery({
        queryKey:['creatorContest' , user?.email] ,
        queryFn: async () => {
            const result = await axiosSecure(`/creator-contest?email=${user?.email}`)
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