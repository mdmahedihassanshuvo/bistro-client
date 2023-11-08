import React from "react";
import DessertBanner from "./Components/DessertBanner";
import TableRow from "../../../Home/Components/Checkout/Components/TableRow";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Cover from "../../../../Shared/Components/Cover/Cover";
import TableItem from "../../../../Shared/Components/Item/TableItem";

const Dessert = ({img, dessert, title }) => {
//   console.log(dessert);

  return (
    <div className="mb-5 md:my-10">
      <Cover img={img} title={title}/>
      <TableItem items={dessert} title={title} />
    </div>
  );
};

export default Dessert;
