import React from "react";
import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import "./Nav.css";

export function Nav() {
    const {cart} = useSelector((state) => state);
  return (
    <div className=" py-4 bg-slate-800 ">
      <div className="flex flex-row items-center max-w-[1000px]  nav-bar px-6 mx-auto justify-between">
        <NavLink to="/">
          <div className="flex flex-row items-center">
            <CiShop className="text-[50px] text-red-600"></CiShop>
            <div className="flex flex-col">
              <h2 className="text-red-600 text-[18px]">RedStore</h2>
              <div className="h-[0.4px] w-[92%] bg-red-600"></div>
              <span className=" text-red-600 text-[5px]">
                shop with ease only on RedStore
              </span>
            </div>
          </div>
        </NavLink>

        <div className="flex gap-3 items-center text-red-600 text-[18px]">
          <NavLink to="/">Home</NavLink>
          <div className="relative">
          <NavLink to="/cart">
            <FaCartShopping />
          </NavLink>
          <div className=" absolute top-[-1.1rem] right-[-0.8rem] text-[10px] text-white rounded-full"> <span>{cart.length>0?(<span  className="  animate-bounce  flex items-center justify-center  w-[1.3rem] h-[1.3rem] bg-green-600 rounded-full">{cart.length}</span>):(<div></div>)}</span> </div>

          </div>
          

        </div>
      </div>
    </div>
  );
}
