import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const useAdmin = () => {
    const {user} = useContext(AuthContext)

    const {data: isAdmin, isLoading} = useQuery({
        queryKey: ['isAdmin', user],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:7000/user/admin/${user?.email}`);
            return res.data;
        }
    })

    return [isAdmin, isLoading];
};

export default useAdmin;