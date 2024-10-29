import React from "react";

export default function Fruit({ name, price, color, soldOut }) {
  return (
    <>
      <li>
        {color} {name} - ${price} {soldOut ? "Sold out" : "In stock"}
      </li>
    </>
  );
}
