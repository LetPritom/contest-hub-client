import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import useAuth from '../../../hooks/useAuth';
import TableData from '../TableData/TableData';

const ManageContest = () => {
    const {user} = useAuth();

    const {data : pendingContests = [] , isPending , refetch} = useQuery({
        queryKey:['pending-contest' , user?.email] ,
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/get-pending`)
            return result.data;
        }
    })

    console.log(pendingContests)

    if(isPending) return <LoaderSpinner></LoaderSpinner>
    return (
        <div>
           {
            pendingContests.map((pending , i) => <TableData refetch={refetch} key={i} pending={pending}></TableData>)
           }
        </div>
    );
};

export default ManageContest;