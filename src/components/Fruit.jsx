import React from "react";

export default function Fruit({ name, price, color }) {
  return (
    <li>
      {color} {name} - ${price}
    </li>
  );
}
