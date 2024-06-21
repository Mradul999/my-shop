import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItem } from "../Components/CartItem";

export function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.price));
    settotalAmount(total);
  }, [cart]);

  return (
    <div className="max-w-[1100px] mx-auto px-10 mt-[18px]">
      {!cart || cart.length === 0 ? (
        <div className="flex items-center justify-center h-screen ">
          <div className="flex flex-col gap-2 items-center ">
            <h2 className="text-[18px]">Your Cart is Empty</h2>
            <NavLink to="/">
              <button className="bg-red-500 hover:bg-red-700 hover:scale-[1.1] text-[15px]   transition-all text-white font-semibold py-5 px-7 rounded-lg">
                SHOP NOW
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex sm:flex-row justify-between gap-10 ">
          <div className="flex flex-col gap-[3rem]">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex flex-col max-w-[600px]  ">
            <h3 className="text-[20px] font-semibold uppercase text-red-500">
              your cart
            </h3>
            <h1 className="text-[40px] mb-[1rem] font-semibold uppercase text-red-600">
              summary
            </h1>
            <p className="text-[20px] mb-[1rem]">
              Total Items:
              <span className="text-red-500 font-bold"> {cart.length}</span>
            </p>
            <p className="text-[20px] mb-[1.5rem]">
              Total Amount:{" "}
              <span className="text-green-500 font-semibold ">
                Rs{totalAmount}
              </span>
            </p>
            <button className="bg-red-500 text-white font-semibold text-[15px] rounded-md px-5 hover:bg-red-700 hover:scale-[1.1] py-3">
              {" "}
              CheckOut Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
