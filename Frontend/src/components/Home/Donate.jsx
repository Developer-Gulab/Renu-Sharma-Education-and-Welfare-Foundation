import React, { useState } from "react";

function Donate() {
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [25, 50, 100, 250];
  return (
    <div>
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl text-[#001F3F] font-bold text-center mb-12">
            Support Our Mission
          </h2>
          <div className="max-w-6xl mx-auto  bg-white p-16 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6 space-x-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`px-4 py-2 rounded-full ${
                    donationAmount === amount
                      ? "bg-[#001F3F] text-[#001F3F]"
                      : "bg-[#001F3F] text-white"
                  } hover:bg-blue-700 hover:text-[#001F3F] transition duration-300`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setDonationAmount(Number(e.target.value));
                }}
                className="w-[600px] px-4 py-2 border-2 border-[#001F3F] rounded-l-full bg-gray-100   placeholder:text-[#001F3F] placeholder:font-bold "
              />

              <button className="w-[300px] bg-[#001F3F]  text-white font-bold py-3 rounded-r-full transition duration-300">
                Donate ${donationAmount}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
