import React from "react";
import Fruit from "./Fruit";

export default function () {
  //   const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const fruits = [
    { name: "Apple", color: "red", price: 2 },
    { name: "Banana", color: "yellow", price: 1 },
    { name: "Orange", color: "orange", price: 3 },
    { name: "Mango", color: "green", price: 5 },
    { name: "Pineapple", color: "yellow", price: 4 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            color={fruit.color}
          />
        ))}
      </ul>
    </div>
  );
}
