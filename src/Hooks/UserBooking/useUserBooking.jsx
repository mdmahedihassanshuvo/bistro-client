import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const useUserBooking = () => {
  const { user } = useContext(AuthContext);

  const { data: userBookings, refetch } = useQuery({
    queryKey: ["userBookings", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://bistro-server-714t.vercel.app/booking/${user?.email}`
      );
      return res.data;
    },
  });

  return [userBookings, refetch];
};

export default useUserBooking;
