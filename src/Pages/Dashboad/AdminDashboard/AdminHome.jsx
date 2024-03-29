import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { FaShoppingCart } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoWalletSharp } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import useMenu from "../../../Hooks/Menu/useMenu";
import useUsers from "../../../Hooks/Users/useUsers";
import { Helmet } from "react-helmet-async";
import useAllPayment from "../../../Hooks/Payment/useAllPayment";
import useAllCart from "../../../Hooks/cart/useAllCart";

const AdminHome = () => {
  const [menu, refetch] = useMenu();
  const [users] = useUsers();
  const [AllCartItem] = useAllCart();
  const [AllPaymentHistory] = useAllPayment();
  const totalPrice = AllPaymentHistory?.reduce(
    (sum, item) => item.price + sum,
    0
  ).toFixed(2);

  // Group the menu items by category
  const categoryData = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { name: item.category, count: 1 };
    } else {
      acc[item.category].count += 1;
    }
    return acc;
  }, {});

  const data = Object.values(categoryData);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="md:mx-5">
      <Helmet title="Admin-Home" />
      <div className="mt-3 md:m-4">
        <h2 className="text-2xl md:text-3xl text-center md:text-left">Hi, WELCOME BACK!</h2>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-white mx-2 md:mx-0">
        <div className="bg-gradient-to-r from-[#bf3ff6] to-[#f3c4fe] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium hidden md:block">
            <IoWalletSharp />
          </p>

          <div>
            <h2 className="md:text-xl font-medium">${totalPrice}</h2>
            <p className="md:text-xl font-medium">Revenue</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#d6a75e] to-[#f9e2b7] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium hidden md:block">
            <HiUsers />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{users?.length}</h2>
            <p className="md:text-xl font-medium">Customers</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#fe568b] to-[#febada] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium hidden md:block">
            <MdProductionQuantityLimits />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{menu?.length}</h2>
            <p className="md:text-xl font-medium">Products</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#72b5ff] to-[#abecff] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium hidden md:block">
            <FaShoppingCart />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{AllCartItem?.length}</h2>
            <p className="md:text-xl font-medium">Orders</p>
          </div>
        </div>
      </div>

      <div className="my-5 md:mt-10">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="count"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors?.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default AdminHome;
