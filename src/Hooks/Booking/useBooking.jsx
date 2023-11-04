import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useBooking = () => {

    const {data: bookings, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
            const res = await axios.get("http://localhost:7000/booking")
            return res.data
        }
    })

    return [bookings, refetch];
};

export default useBooking;