// import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CarrSlice";
import { toast } from "react-hot-toast";


export function Product({ item }) {
  const newDesc = `${item.description.substring(0, 55)}...`;
  const{cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
    
  }

  function addToCart(){
    dispatch(add(item));
    toast.success("Item added to cart");
  }

  return (
    <div className=" one-product flex flex-col max-w-[320px]    min-h-[400px]  relative p-5  px-8   rounded-xl  mb-6 hover:scale-[1.1] transition-all   ">
      <h1 className=" mb-[0.8rem] text-[13px] font-semibold">{item.title}</h1>
      <p className="text-gray-600 mb-[1rem]   text-[11px] ">{newDesc}</p>
      <img
        className=" mt-auto  object-contain mx-auto   w-[190px]  h-[200px]  "
        src={item.image}
      ></img>
      <div className="flex flex-row justify-between mt-4   items-center  ">
        <span className="text-red-600   font-semibold">Rs {item.price}</span>
        {cart.some((p)=>p.id==item.id)?(<button onClick={removeFromCart} className="  text-white text-[10px] hover:bg-red-700 transition-all   uppercase font-semibold bg-red-400 px-2 py-1 rounded-lg">
          
          Remove from Cart
        </button>):(<button onClick={addToCart} className=" text-white text-[10px] hover:bg-red-700 transition-all   uppercase font-semibold bg-red-400 px-2 py-1 rounded-lg">
        Add to Cart
        </button>)}
        
      </div>
      
      
    </div>
  );
}
