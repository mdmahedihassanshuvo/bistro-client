import React from "react";
import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../Hooks/Payment/usePaymentHistory";
import SectionTitle from "../../../Shared/Components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const [paymentHistory, refetch] = usePaymentHistory();

  return (
    <div className="my-5 md:my-0 md:pt-5 md:w-[80%] mx-auto">
      <Helmet title="Dashboard-Payment History" />
      <SectionTitle subHeading="Your payment" heading="HISTORY" />
      <div className="flex justify-around items-center md:mb-5 text-2xl font-bold">
        <h2 className="uppercase">Total Payment: {paymentHistory?.length}</h2>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-[#d1a054] text-white ">
            <th></th>
            <th className="uppercase">User Email</th>
            <th className="uppercase">Price</th>
            <th className="uppercase">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {paymentHistory?.map((item, index) => (
            <tr key={item._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>User: {item?.email}</td>
              <td>Price: ${item?.price}</td>
              <td>ID: {item?.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
