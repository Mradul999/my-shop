import React from "react";
import { Product } from "../Components/Product.js";
import {products} from "../data.js";
export function Home(){
    return(<div className="mt-[35px] max-w-[1000px] flex justify-center flex-wrap gap-6 mx-auto px-4 ">
        {products.map((item)=>(<Product item={item}/>))}

    </div>);
}