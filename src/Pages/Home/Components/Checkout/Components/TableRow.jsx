import React from "react";

const TableRow = ({ item }) => {
  console.log(item);
  const { price, _id, recipe, name, image } = item;

  return (
    <tr className="flex justify-between items-center">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="text-lg font-medium">{name}</span>
        <br />
        <p>{recipe}</p>
      </td>
      <td className="font-medium">${price}</td>
      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};

export default TableRow;
