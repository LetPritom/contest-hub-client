import { useQuery } from '@tanstack/react-query';
import useAuth from "../../../hooks/useAuth";
import axios from 'axios';
import React from 'react';
import LoaderSpinner from '../../../Components/Loader/LoaderSpinner';
import ManageUserTable from '../TableData/ManageUserTable';

const ManageUsers = () => {

    const {user} = useAuth()

     const { data: users = [], isPending , refetch} = useQuery({
    queryKey: ["users", user?.email ],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/all-users`
      );
      return result.data;
    },
  });

  console.log(users)

  if(isPending) return <LoaderSpinner></LoaderSpinner>

    return (
        <div>
            {
                users.map((user , i ) => <ManageUserTable refetch={refetch} key={i} user={user}></ManageUserTable>)
            }
        </div>
    );
};

export default ManageUsers;