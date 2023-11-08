import React, { useContext } from "react";
import { HiUsers } from "react-icons/hi";
import { IoWalletSharp } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import useUserBooking from "../../../Hooks/UserBooking/useUserBooking";
import useCart from "../../../Hooks/cart/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCalendar, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../Hooks/Payment/usePaymentHistory";

const UserHome = () => {
  const [userBookings] = useUserBooking();
  const [cartItem] = useCart();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [paymentHistory] = usePaymentHistory();
  const totalPrice = paymentHistory
    ?.reduce((sum, item) => item.price + sum, 0)
    .toFixed(2);

  return (
    <div className="md:mx-5">
      <Helmet title="User-Home" />
      <div className="mt-3 md:m-4">
        <h2 className="text-center md:text-left text-3xl">Hi, WELCOME BACK!</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-4 mx-2 md:mx-0 text-white">
        <div className="bg-gradient-to-r from-[#bf3ff6] to-[#f3c4fe] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <IoWalletSharp />
          </p>

          <div>
            <h2 className="md:text-xl font-medium">${totalPrice}</h2>
            <p className="md:text-xl font-medium">Payment</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#d6a75e] to-[#f9e2b7] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <FaShoppingCart />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{cartItem?.length}</h2>
            <p className="md:text-xl font-medium">Shop</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#fe568b] to-[#febada] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <MdProductionQuantityLimits />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{userBookings?.length}</h2>
            <p className="md:text-xl font-medium">Bookings</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center mx-2 md:mx-0 my-5 md:my-10">
        <div className="card md:w-96 md:h-80 rounded-none shadow-xl bg-[#ffedd5]">
          <div className="avatar mx-auto top-[25%]">
            <div className="md:w-32 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} title={user?.displayName} />
            </div>
          </div>
        </div>
        <div className="card md:w-96 md:h-80 rounded-none bg-[#fef9c3] shadow-xl">
          <div className="md:m-10">
            <h2 className="text-center text-xl md:text-2xl font-medium md:mb-10">
              YOUR ACTIVITIES
            </h2>
            <p className="flex justify-start items-center md:gap-2 md:mb-2 text-lg md:text-xl text-[#0088fe]">
              <FaShoppingCart /> ORDERS: {cartItem?.length}
            </p>
            <p className="flex justify-start items-center md:gap-2 md:mb-2 text-lg md:text-xl text-[#ffbb28]">
              <FaCalendar /> BOOKINGS: {userBookings?.length}
            </p>
            <p className="flex justify-start items-center md:gap-2 md:mb-2 text-lg md:text-xl text-[#ff8042]">
              <FaWallet /> PAYMENT: {paymentHistory?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
