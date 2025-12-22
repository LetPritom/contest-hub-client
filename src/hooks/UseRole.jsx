import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {

    const {user , loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data:role , isLoading: isRoleLoading} = useQuery({
        enabled:!loading && !!user?.email ,
        queryKey: ['role' , user?.email],
        queryFn: async () =>  {
            const {data} = await axiosSecure(`/user-role?email=${user?.email}`)
            return data.role
        }
    })

    return [role , isRoleLoading] 
    
};

export default useRole;


