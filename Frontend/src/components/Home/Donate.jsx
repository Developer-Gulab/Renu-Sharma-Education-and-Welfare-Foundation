import { useState } from "react";

function Donate() {
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [25, 50, 100, 250];
  return (
    <div>
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Support Our Mission
          </h2>
          <div className="max-w-xl mx-auto bg-opacity-10 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6 space-x-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`px-4 py-2 rounded-full ${
                    donationAmount === amount
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-700 hover:text-white transition duration-300`}
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
                className="w-[600px] px-4 py-2 border rounded-l-full"
              />

              <button className="w-[300px] bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-r-full transition duration-300">
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
