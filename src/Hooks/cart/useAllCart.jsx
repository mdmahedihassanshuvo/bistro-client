import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useAllCart = () => {
  const { data: AllCartItem, refetch } = useQuery({
    queryKey: ["AllCartItem"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:7000/cart");
      return res.data;
    },
  });

  return [AllCartItem, refetch];
};

export default useAllCart;
