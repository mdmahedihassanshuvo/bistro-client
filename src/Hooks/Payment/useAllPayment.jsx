import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllPayment = () => {
  const { data: AllPaymentHistory, refetch } = useQuery({
    queryKey: ["AllPaymentHistory"],
    queryFn: async () => {
      const res = await axios.get("https://bistro-server-714t.vercel.app/payment");
      return res.data;
    },
  });

  return [AllPaymentHistory, refetch];
};

export default useAllPayment;
