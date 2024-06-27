import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity(pizzaId) {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQuantity(pizzaId) {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 md:gap-3 items-center">
      <Button type="round" onClick={() => handleDecreaseQuantity(pizzaId)}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => handleIncreaseQuantity(pizzaId)}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
