import React, { useState } from "react";
import useMenu from "../../../../Hooks/Menu/useMenu";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";
import TableRow from "../../../Home/Components/Checkout/Components/TableRow";
import { Link } from "react-router-dom";

const MenuOffer = () => {
  const [menu] = useMenu();
  //   console.log(menu);
  const [displayCount, setDisplayCount] = useState(4);
  const [position, setPosition] = useState(false);

  const showAllItems = () => {
    setDisplayCount(menu.length);
    setPosition(true);
  };

  return (
    <div className="md:my-10">
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <div className="md:mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {/* row 1 */}
              {menu.slice(0, displayCount).map((item) => (
                <TableRow key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center">
        <Link
        to='/shop'
          disabled={position}
          onClick={showAllItems}
          className="btn border-b-2 border-b-black hover:border-b-2 hover:border-b-accent-focus hover:text-orange-500 mt-2"
        >
          VIEW FULL MENU
        </Link>
      </div>
    </div>
  );
};

export default MenuOffer;
