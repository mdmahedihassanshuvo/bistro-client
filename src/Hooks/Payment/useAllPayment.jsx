import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useAllPayment = () => {
  const { data: AllPaymentHistory, refetch } = useQuery({
    queryKey: ["AllPaymentHistory"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:7000/payment");
      return res.data;
    },
  });

  return [AllPaymentHistory, refetch];
};

export default useAllPayment;
