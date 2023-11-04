import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const useUserBooking = () => {
  const { user } = useContext(AuthContext);

  const { data: userBookings, refetch } = useQuery({
    queryKey: ["userBookings", user],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:7000/booking/${user?.email}`
      );
      return res.data;
    },
  });

  return [userBookings, refetch];
};

export default useUserBooking;
