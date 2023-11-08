import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const usePaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const { data: paymentHistory, refetch } = useQuery({
    queryKey: ["paymentHistory", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://bistro-server-714t.vercel.app/payment/${user?.email}`
      );
      return res.data;
    },
  });

  return [paymentHistory, refetch];
};

export default usePaymentHistory;
