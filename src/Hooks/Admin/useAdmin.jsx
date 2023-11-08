import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const useAdmin = () => {
    const {user} = useContext(AuthContext)

    const {data: isAdmin, isLoading} = useQuery({
        queryKey: ['isAdmin', user],
        queryFn: async () =>{
            const res = await axios.get(`https://bistro-server-714t.vercel.app/user/admin/${user?.email}`);
            return res.data;
        }
    })

    return [isAdmin, isLoading];
};

export default useAdmin;