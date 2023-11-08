import React, { useState } from "react";
import Cover from "../../Shared/Components/Cover/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/Menu/useMenu";
import { useParams } from "react-router-dom";
import OrderItem from "./Components/OrderItem";
import SectionTitle from "../../Shared/Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  // const [active, setActive] = useState(true);
  const categories = ["dessert", "pizza", "salad", "soup"];
  const { category } = useParams();
  const initialValue = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialValue);
  const [menu] = useMenu();
  // console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="">
      <Helmet title="Bistro-Our Shop" />
      <Cover img={shopImg} title="our shop" />
      <div className="my-5 md:my-10">
        <div>
          <SectionTitle subHeading="Food Items" heading="Pick Your Dish" />
        </div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center lg:mb-12 flex justify-center gap-5">
            <Tab className="btn border-b-4 mb-4 md:mb-0 border-[#BB8506] bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0">
              Dessert
            </Tab>
            <Tab className="btn border-b-4 mb-4 md:mb-0 border-[#BB8506] bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0">
              Pizza
            </Tab>
            <Tab className="btn border-b-4 mb-4 md:mb-0 border-[#BB8506] bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0">
              Salad
            </Tab>
            <Tab className="btn border-b-4 mb-4 md:mb-0 border-[#BB8506] bg-white btn-ghost font-medium hover:border-b-4 hover:border-slate-700 border-0">
              Soup
            </Tab>
          </TabList>
          <TabPanel className="">
            <OrderItem item={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderItem item={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderItem item={salad} />
          </TabPanel>
          <TabPanel>
            <OrderItem item={soup} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
