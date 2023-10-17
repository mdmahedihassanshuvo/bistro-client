import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useMenu = () => {

    const {data : menu = [], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:7000/menu')
            return res.data
        }
    })

    return [menu, refetch];
};

export default useMenu;