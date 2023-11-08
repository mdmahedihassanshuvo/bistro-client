import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);

    const {data : cartItem =[], refetch} = useQuery({
        queryKey: ['cartItem', user],
        queryFn: async () =>{
            const res = await axios.get(`https://bistro-server-714t.vercel.app/cart/${user?.email}`)
            return res.data;
        }
    })

    return [cartItem, refetch];
};

export default useCart;