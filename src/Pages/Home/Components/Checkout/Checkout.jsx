import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Shared/Components/SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/Menu/useMenu";
import TableRow from "./Components/TableRow";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos";

const Checkout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [menu] = useMenu();
  // console.log(menu);
  const [displayCount, setDisplayCount] = useState(8);
  const [position, setPosition] = useState(false);

  const showAllItems = () => {
    setDisplayCount(menu.length);
    setPosition(true);
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="mt-5 md:mt-16">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="mx-3 md:mx-10">
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
        <button
          disabled={position}
          onClick={showAllItems}
          className="btn border-b-2 border-b-black hover:border-b-2 hover:border-b-accent-focus hover:text-orange-500 mt-2"
        >
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default Checkout;
