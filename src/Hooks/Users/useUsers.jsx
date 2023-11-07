import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useUsers = () => {
  const { loading } = useContext(AuthContext);
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get("http://localhost:7000/user");
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUsers;
