"use client";

import Image from "next/image";
import Label from "../../public/images/label.png";
import LabelCyan from "../../public/images/label1.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import React, { useState } from "react";
import AsgardSofa1 from "../../public/images/Asgaard sofa.png";
import Multi from "../../public/images/multi.png";
import sofa4 from "../../public/images/sofa4.png";
import Link from "next/link";

export default function OurProduct() {
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(!isCartOpen); // Toggle cart visibility
  };
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      imageClass: "bg-ImageRoom",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: null,
      imageClass: "bg-FeaturedProduct",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      imageClass: "bg-Sofa",
      label: "30%",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: null,
      imageClass: "bg-Room",
      label1: "New",
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      oldPrice: null,
      imageClass: "bg-Light",
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      oldPrice: null,
      imageClass: "bg-BadRoom",
      label1: "New",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      imageClass: "bg-WallRoom",
      label: "30%",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      oldPrice: null,
      imageClass: "bg-RedSofa",
      label1: "New",
    },
  ];

  return (
    <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
      {/* Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
          <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
            {/* Header */}
            <div className="flex items-center justify-between -mt-16">
              <h2 className="text-2xl font-semibold">Shopping Cart</h2>
              <button
                onClick={toggleCart}
                className="text-lg font-bold hover:text-red-500"
              >
                X
              </button>
            </div>
            <hr className="my-4" />

            {/* Product List */}
            <div className="flex flex-col gap-6">
              {/* Product 1 */}
              <div className="flex items-center gap-4">
                <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                  <Image src={AsgardSofa1} alt="Remove" className="h-30 w-30" />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium">Asgaard Sofa</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>1 x</span>
                    <span className="text-[#b88e2f] font-medium">
                      Rs. 250,000.00
                    </span>
                  </div>
                </div>
                <button>
                  <Image src={Multi} alt="Remove" className="h-5 w-5" />
                </button>
              </div>

              {/* Product 2 */}
              <div className="flex items-center gap-4">
                <div className="h-[102px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0">
                  <Image src={sofa4} alt="Remove" className="h-30 w-30" />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium">Casaliving Wood</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>1 x</span>
                    <span className="text-[#b88e2f] font-medium">
                      Rs. 270,000.00
                    </span>
                  </div>
                </div>
                <button>
                  <Image src={Multi} alt="Remove" className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
              <span>Subtotal</span>
              <span className="text-[#b88e2f]">Rs. 520,000.00</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10 flex-wrap">
              <Link href={"/cart"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                  Cart
                </button>
              </Link>
              <Link href={"/checkout"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                  Checkout
                </button>
              </Link>
              <Link href={"/comparison"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                  Comparison
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center pl-[5px]">
        <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700 mt-10">
          Our Products
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
            onClick={() => (window.location.href = `/singleproduct`)} // Navigate to single product page
          >
            {/* Image Section */}
            <div
              className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
            >
              {product.label && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={Label}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-20"
                    />
                    <div className="z-10 text-center mt-2 font-semibold text-white">
                      -50%
                    </div>
                  </div>
                </div>
              )}

              {product.label1 && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={LabelCyan}
                      alt="Discount Label"
                      className="absolute -inset-0 h-10 w-12"
                    />
                    <div className="z-10 text-center mt-2 font-medium text-white">
                      New
                    </div>
                  </div>
                </div>
              )}
              {/* Hover Div */}
              <div
                className="absolute inset-0 flex-col items-center justify-center hidden gap-y-6 bg-neutral-700/70 group-hover:flex"
                onClick={(e) => e.stopPropagation()} // Prevent card click event
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    toggleCart(); // Toggle cart visibility
                  }}
                  className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                >
                  Add to Cart
                </button>
                <div className="flex items-center gap-x-4 text-white">
                  <div className="flex items-center gap-x-1">
                    <IoShareSocialOutline />
                    <div>Share</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <MdCompareArrows />
                    <div>Compare</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <CiHeart />
                    <div>Like</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 p-4">
              <div className="text-2xl font-semibold text-neutral-700">
                {product.name}
              </div>
              <div className="text-gray-500">{product.description}</div>
              <div className="flex items-center gap-x-4">
                <div className="text-xl font-semibold text-neutral-700">
                  {product.price}
                </div>
                {product.oldPrice && (
                  <div className="text-gray-400 line-through">
                    {product.oldPrice}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center pl-px">
        <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-white px-[73px] py-[11px] mb-8">
          <div className="pl-2 text-center font-semibold leading-normal text-[darkgoldenrod]">
            Show More
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import Label from "../../public/images/label.png";
// import LabelCyan from "../../public/images/label1.png";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { MdCompareArrows } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function OurProduct() {
//   const [isCartOpen, setCartOpen] = useState(false);

//   const toggleCart = () => {
//     setCartOpen(!isCartOpen); // Toggle cart visibility
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Syltherine",
//       description: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       oldPrice: "Rp 3.500.000",
//       imageClass: "bg-ImageRoom",
//     },
//     {
//       id: 2,
//       name: "Leviosa",
//       description: "Stylish cafe chair",
//       price: "Rp 2.500.000",
//       oldPrice: null,
//       imageClass: "bg-FeaturedProduct",
//     },
//     {
//       id: 3,
//       name: "Lolito",
//       description: "Luxury big sofa",
//       price: "Rp 7.000.000",
//       oldPrice: "Rp 14.000.000",
//       imageClass: "bg-Sofa",
//       label: "30%",
//     },
//     // Add more products as needed
//   ];

//   return (
//     <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
//       {/* Cart */}
//       {isCartOpen && (
//         <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
//           <div className="relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
//             {/* Header */}
//             <div className="flex items-center justify-between -mt-16">
//               <h2 className="text-2xl font-semibold">Shopping Cart</h2>
//               <button
//                 onClick={toggleCart}
//                 className="text-lg font-bold hover:text-red-500"
//               >
//                 X
//               </button>
//             </div>
//             <hr className="my-4" />

//             {/* Cart Body */}
//             <div className="flex flex-col gap-6">
//               <p>No products in the cart yet!</p>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-center">
//         <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700 mt-10">
//           Our Products
//         </div>
//       </div>

//       {/* Product Cards */}
//       <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
//           >
//             {/* Image Section */}
//             <div
//               className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
//               onClick={() => (window.location.href = `/product/${product.id}`)} // Navigate to Single Product Page
//             >
//               {product.label && (
//                 <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
//                   <div className="relative flex items-center justify-center">
//                     <Image
//                       src={Label}
//                       alt="Discount Label"
//                       className="absolute -inset-0 z-0 h-10 w-20"
//                     />
//                     <div className="z-10 text-center mt-2 font-semibold text-white">
//                       {product.label}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {product.label1 && (
//                 <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
//                   <div className="relative flex items-center justify-center">
//                     <Image
//                       src={LabelCyan}
//                       alt="Discount Label"
//                       className="absolute -inset-0 h-10 w-12"
//                     />
//                     <div className="z-10 text-center mt-2 font-medium text-white">
//                       New
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {/* Hover Div */}
//               <div className="absolute inset-0 flex-col items-center justify-center hidden gap-y-6 bg-neutral-700/70 group-hover:flex">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent triggering product card click
//                     toggleCart(); // Open Cart
//                   }}
//                   className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
//                 >
//                   Add to Cart
//                 </button>
//                 <div className="flex items-center gap-x-4 text-white">
//                   <div className="flex items-center gap-x-1">
//                     <IoShareSocialOutline />
//                     <div>Share</div>
//                   </div>
//                   <div className="flex items-center gap-x-1">
//                     <MdCompareArrows />
//                     <div>Compare</div>
//                   </div>
//                   <div className="flex items-center gap-x-1">
//                     <CiHeart />
//                     <div>Like</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="flex flex-col items-start gap-y-2 bg-gray-100 p-4">
//               <div className="text-2xl font-semibold text-neutral-700">
//                 {product.name}
//               </div>
//               <div className="text-gray-500">{product.description}</div>
//               <div className="flex items-center gap-x-4">
//                 <div className="text-xl font-semibold text-neutral-700">
//                   {product.price}
//                 </div>
//                 {product.oldPrice && (
//                   <div className="text-gray-400 line-through">
//                     {product.oldPrice}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
