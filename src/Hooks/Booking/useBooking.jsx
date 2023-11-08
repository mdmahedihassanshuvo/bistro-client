import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBooking = () => {

    const {data: bookings, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
            const res = await axios.get("https://bistro-server-714t.vercel.app/booking")
            return res.data
        }
    })

    return [bookings, refetch];
};

export default useBooking;