"use client";

import Image from "next/image";
import { MdDelete } from "react-icons/md";
import React, { useEffect, useState } from "react";
import WishlistHero from "@/components/HeroSectionComponent/WishListHero";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Dispatch custom event
    window.dispatchEvent(new Event("wishlistUpdated"));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <WishlistHero />
      <h2 className="text-3xl font-bold mb-6 text-center">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="object-cover"
                unoptimized
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
              <button
                className="mt-2 px-6 py-2 text-red-500 hover:text-[#b88e2f] transition-colors"
                onClick={() => removeFromWishlist(product.id)}
              >
                <MdDelete className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
