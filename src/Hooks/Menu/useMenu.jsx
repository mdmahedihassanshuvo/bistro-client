import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useMenu = () => {

    const {data : menu = [], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axios.get('https://bistro-server-714t.vercel.app/menu')
            return res.data
        }
    })

    return [menu, refetch];
};

export default useMenu;