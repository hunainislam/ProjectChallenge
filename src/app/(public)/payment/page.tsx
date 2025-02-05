"use client";

import Image from "next/image";
import { useState } from "react";
import CardsImage from "../../../../public/images/imgcards.png";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    nameOnCard: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Save form data to local storage
    localStorage.setItem("paymentFormData", JSON.stringify(formData));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-700 flex items-center justify-center p-6 text-white">
        Thank you for your submission!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-700 flex items-center justify-center p-6">
      <form
        className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap gap-4">
          {/* Billing Address Column */}
          <div className="min-w-[250px] flex-1">
            <h3 className="text-lg uppercase text-gray-700 mb-2">
              Billing Address
            </h3>

            <div className="mb-4">
              <label className="block mb-2">Full Name :</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jacob Aiden"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Address :</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Room - Street - Locality"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">City :</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Berlin"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2">State :</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Germany"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">Zip Code :</label>
                <input
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="123 456"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
                />
              </div>
            </div>
          </div>

          {/* Payment Column */}
          <div className="min-w-[250px] flex-1">
            <h3 className="text-lg uppercase text-gray-700 mb-2">Payment</h3>

            <div className="mb-4">
              <label className="block mb-2">Cards Accepted :</label>
              <Image
                src={CardsImage}
                alt="Accepted credit cards"
                className="h-8 mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Name On Card :</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                placeholder="Mr. Jacob Aiden"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Credit Card Number :</label>
              <input
                type="number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1111 2222 3333 4444"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Exp. Month :</label>
              <input
                type="text"
                name="expMonth"
                value={formData.expMonth}
                onChange={handleChange}
                placeholder="August"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2">Exp. Year :</label>
                <input
                  type="number"
                  name="expYear"
                  value={formData.expYear}
                  onChange={handleChange}
                  placeholder="2025"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">CVV :</label>
                <input
                  type="number"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-[#b88e2f]"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-[#b88e2f] text-white py-2 rounded-md hover:bg-neutral-700 transition-colors duration-300"
          onClick={() => {
            setSubmitted(true);
            window.location.href = "/checkout";
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
