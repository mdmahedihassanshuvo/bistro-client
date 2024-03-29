import React from "react";
import { Link } from "react-router-dom";
import TableRow from "../../../Pages/Home/Components/Checkout/Components/TableRow";

const TableItem = ({items, title}) => {
  return (
    <div className="md:mt-16">
      <div className="md:mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mx-2 md:mx-0">
              {/* row 1 */}
              {items.slice(0,6).map((item) => (
                <TableRow key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center my-2">
        <Link
          to={`/shop/${title}`}
          // disabled={position}
          // onClick={showAllItems}
          className="btn border-b-2 border-b-black hover:border-b-2 hover:border-b-accent-focus hover:text-orange-500 mt-2"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default TableItem;
