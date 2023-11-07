import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const usePaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const { data: paymentHistory, refetch } = useQuery({
    queryKey: ["paymentHistory", user],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:7000/payment/${user?.email}`
      );
      return res.data;
    },
  });

  return [paymentHistory, refetch];
};

export default usePaymentHistory;
