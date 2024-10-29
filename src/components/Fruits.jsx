import React from "react";
import Fruit from "./Fruit";

export default function () {
  //   const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const fruits = [
    { name: "Apple", color: "red", price: 12, soldOut: true },
    { name: "Banana", color: "yellow", price: 8 , soldOut: true},
    { name: "Orange", color: "orange", price: 25, soldOut: false },
    { name: "Mango", color: "green", price: 16, soldOut: true },
    { name: "Pineapple", color: "yellow", price: 4 , soldOut: false},
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
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
