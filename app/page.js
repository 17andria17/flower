import Image from "next/image";
 import { FaAngleDown } from "react-icons/fa6";
import 'animate.css';
import FlowerList from "@/components/Product list";

   
export default function Header () {
    return(
<>
<div className="h-screen   bg-cover bg-[url('img/flowwer.jpg')]">
    <div className="bg-white pl-10 pt-3 border-b-2 w-90%">
      <p className="">Default welcome msg!</p>
      <div className="bg-gray-400"></div>
    </div>
   <div className=" flex bg-white  h-24">
      <h1 className="pt-7 text-3xl pl-10">Phuler</h1>
    <div className="flex pt-8 pl-96 text-xl">
      <h2 className="pr-5 hover:text-red-500 cursor-pointer">HOME</h2>
      <h2 className="pr-5 hover:text-red-500 cursor-pointer">ABOUT</h2>
      <h2 className="pr-5 hover:text-red-500 cursor-pointer">SHOP</h2>
      <h2 className="pr-5 hover:text-red-500 cursor-pointer">BLOG</h2>
      <h2 className="pr-5 hover:text-red-500 cursor-pointer">PAGES</h2>
     
    </div>
   </div>
   <div className="mt-56 ml-12 ">
      <h1 className=" text-red-500 text-3xl pb-3 animate__animated animate__backInLeft">New Arrivals</h1>
      <h1 className="text-5xl pb-3 animate__animated animate__backInLeft">For MOTHER's DAY</h1>
      <h4 className="pb-3 animate__animated animate__backInLeft">Exclusive Offer -10% Off This Week</h4>
      <button className="bg-red-500 animate__animated animate__backInLeft py-2 px-4 rounded text-white cursor-pointer hover:bg-white hover:text-red-500 ">SHOP NOW</button>
   </div>
  
   </div> <div></div>
    <FlowerList/>
   </>
    )
}