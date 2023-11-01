import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);

    const {data : cartItem =[], isLoading} = useQuery({
        queryKey: ['cartItem', user],
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:7000/cart/${user.email}`)
            return res.data;
        }
    })

    return [cartItem, isLoading];
};

export default useCart;