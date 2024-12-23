import { FaHome, FaMoneyCheckAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-8">
      <div className="w-full mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Rentify</h1>
        <p className="text-xl mb-8">
          Simplify your rental management with Rentify. Track tenants, accounts,
          and monthly rents seamlessly.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100">
            Get Started
          </button>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
        <div className="mt-12 flex justify-center space-x-10">
          <div className="text-center">
            <FaHome className="text-5xl mb-2" />
            <p className="text-lg font-medium">Manage Tenants</p>
          </div>
          <div className="text-center">
            <FaMoneyCheckAlt className="text-5xl mb-2" />
            <p className="text-lg font-medium">Track Monthly Rents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
