import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CarrSlice";
export function CartItem({ item }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
  }
  return (
    <div>
      <div className="flex max-w-[500px] gap-[2rem] items-center justify-between mr-2">
        <img className=" w-[35%] object-contain " src={item.image}></img>
        <div className="flex flex-col gap-5 max-w-[300px] mr-2">
          <h2 className="font-semibold text-[13px] ">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[15px] text-green-500">
              Rs{item.price}
            </span>
            <MdDelete
              onClick={removeFromCart}
              className="text-[20px] mr-[1rem] text-red-600"
            ></MdDelete>
          </div>
        </div>
      </div>
      <div className="h-[1px] mt-[1rem] w-[90%] mx-auto rounded-lg bg-red-600"></div>
    </div>
  );
}
