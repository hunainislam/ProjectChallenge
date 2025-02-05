"use client";

import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { client } from "@/sanity/lib/client";
import { Star, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import ComparisonHero from "@/components/HeroSectionComponent/ComparisonHero";

// Interface ProductComparison

interface ProductComparison {
  gotoproduct: string;
  pageformore: string;
  products: string;
  viewmore: string;
  sofaoneimage: string;
  asgaardsofa: string;
  rsOne: string;
  reviewsOne: string;
  sofatwoimage: string;
  outdoorsofaset: string;
  rsTwo: string;
  reviewsTwo: string;
  addProduct: string;
  chooseProduct: string;
  specification: string;
  addAsgaardSofaToCart: string;
  addOutdoorSofaToCart: string;
  sectionsReference: {
    title: string;
    rows: {
      label: string;
      product1: string;
      product2: string;
    }[];
  }[];
  title: string;
  rows: {
    label: string;
    product1: string;
    product2: string;
  }[];
}

// Interface CartItem

interface CartItem {
  id: string;
  title: string;
  price: string;
  productImage: string;
  quantity: number;
  description?: string;
  tags?: string;
}

export default function Comparison() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [openSection, setOpenSection] = useState<number | null>(null);

  const [ProductComparisonData, setProductComparisonData] =
    useState<ProductComparison | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fetch ProductComparison For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ProductComparisonQuery = `*[_type == "productcomparison"] [0] {
          gotoproduct,
          pageformore,
          products,
          viewmore,
          sofaoneimage,
          asgaardsofa,
          rsOne,
          reviewsOne,
          sofatwoimage,
          outdoorsofaset,
          rsTwo,
          reviewsTwo,
          addProduct,
          chooseProduct,
          specification,
          addAsgaardSofaToCart,
          addOutdoorSofaToCart,
          sectionsReference[]->{
            title,
            rows
          }
        }`;

        const data = await client.fetch(ProductComparisonQuery);
        setProductComparisonData(data);
      } catch (error) {
        console.error("Error fetching product comparison data:", error);
      }
    };

    fetchData();

    // Get cart items from localStorage
    const storedCartItems = localStorage.getItem("comparisonCart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Function to handle product deletion
  const handleDeleteProduct = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("comparisonCart", JSON.stringify(updatedCartItems));
  };

  // Page Loading Condition

  if (!ProductComparisonData) {
    return <div></div>;
  }

  return (
    <div className="container mx-auto px-4 lg:px-1 py-8 lg:py-12 overflow-hidden">
      <ComparisonHero />

      {/* Top Section - Responsive Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Go to Product Page */}

        <div className="flex flex-col p-6 bg-white  rounded-lg">
          <p className="text-lg font-medium text-black">
            {ProductComparisonData.gotoproduct} <br />{" "}
            {ProductComparisonData.pageformore} <br />{" "}
            {ProductComparisonData.products}
          </p>
          <span className="text-sm font-medium text-[#727272] border-b text-center border-black mt-4">
            {ProductComparisonData.viewmore}
          </span>
        </div>

        {/* Cart Items Section */}
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="relative h-48 bg-[#F9F1E7] rounded-md mb-4">
                  <Image
                    src={item.productImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#B88E2F] mb-2">
                  {item.price}
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={20} />
                    ))}
                    <Star size={20} className="text-gray-300" />
                  </div>
                  <p className="text-gray-600 ml-2 text-sm">
                    {item.quantity} reviews
                  </p>
                </div>
                <button
                  className="mt-2 px-6 py-2 text-red-500 hover:text-[#b88e2f] transition-colors"
                  onClick={() => handleDeleteProduct(index)}
                >
                  <MdDelete className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add a Product Section */}

        <div className="flex flex-col p-6 bg-white  rounded-lg">
          <p className="text-lg font-semibold text-gray-800 mb-3">
            {ProductComparisonData?.addProduct}
          </p>
          <select
            className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">{ProductComparisonData?.chooseProduct}</option>
            <option value="sofa1">{ProductComparisonData?.asgaardsofa}</option>
            <option value="sofa2">
              {ProductComparisonData?.outdoorsofaset}
            </option>
          </select>
        </div>
      </div>

      {/* Detailed Comparison Section - Mobile Accordion & Desktop Table */}

      {ProductComparisonData?.sectionsReference.map(
        (section: any, sectionIndex: number) => (
          <div key={sectionIndex} className="bg-white rounded-lg p-6 mt-8">
            {/* Desktop View */}
            <div className="hidden md:block">
              <h4 className="text-[20px] md:text-[28px] font-semibold text-black mb-4">
                {section.title}
              </h4>
              <div>
                <div className="flex items-center py-2 border-b bg-gray-100">
                  <div className="w-1/4 text-gray-800 font-medium pl-4">
                    {ProductComparisonData?.specification}
                  </div>
                  <div className="w-1/4 text-gray-800 font-medium">
                    {ProductComparisonData?.asgaardsofa}
                  </div>
                  <div className="w-1/4 text-gray-800 font-medium">
                    {ProductComparisonData?.outdoorsofaset}
                  </div>
                </div>
                {section.rows.map((row: any, rowIndex: number) => (
                  <div
                    key={rowIndex}
                    className="flex items-center py-2 border-t"
                  >
                    <div className="w-1/4 text-gray-800 font-medium pl-4">
                      {row.label}
                    </div>
                    <div className="w-1/4 text-gray-600">{row.product1}</div>
                    <div className="w-1/4 text-gray-600">{row.product2}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Accordion View */}

            <div className="md:hidden">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenSection(
                    openSection === sectionIndex ? null : sectionIndex
                  )
                }
              >
                <h4 className="text-[20px] font-semibold text-black">
                  {section.title}
                </h4>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openSection === sectionIndex ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openSection === sectionIndex && (
                <div className="mt-4">
                  {section.rows.map((row: any, rowIndex: number) => (
                    <div
                      key={rowIndex}
                      className="border-t py-3 grid grid-cols-2 gap-4"
                    >
                      <div className="text-gray-800 font-medium">
                        {row.label}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-gray-600 font-semibold">
                          {ProductComparisonData.asgaardsofa}
                        </div>
                        <div className="text-gray-600">{row.product1}</div>
                        <div className="text-gray-600 font-semibold">
                          {ProductComparisonData.outdoorsofaset}
                        </div>
                        <div className="text-gray-600">{row.product2}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      )}
      <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/4 md:mr-4"></div>
        <div className="w-full md:w-1/4 mr-0 md:mr-4 mb-4 md:mb-0">
          <button className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9A7024] transition-colors">
            {ProductComparisonData?.addAsgaardSofaToCart}
          </button>
        </div>
        <div className="w-full md:w-1/4">
          <button className="w-full px-4 py-2 bg-[#B88E2F] text-white rounded-md hover:bg-[#9A7024] transition-colors">
            {ProductComparisonData?.addOutdoorSofaToCart}
          </button>
        </div>
      </div>
    </div>
  );
}
