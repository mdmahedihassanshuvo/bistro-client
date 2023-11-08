import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllCart = () => {
  const { data: AllCartItem, refetch } = useQuery({
    queryKey: ["AllCartItem"],
    queryFn: async () => {
      const res = await axios.get("https://bistro-server-714t.vercel.app/cart");
      return res.data;
    },
  });

  return [AllCartItem, refetch];
};

export default useAllCart;
