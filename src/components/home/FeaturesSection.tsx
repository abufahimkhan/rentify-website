import {
  FaUserFriends,
  FaChartBar,
  FaBuilding,
  FaWallet,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaUserFriends className="text-blue-500 text-4xl" />,
      title: "Tenant Management",
      description:
        "Easily manage tenants with detailed profiles, rental agreements, and contact information.",
    },
    {
      icon: <FaChartBar className="text-green-500 text-4xl" />,
      title: "Expense Tracking",
      description:
        "Track expenses and income to maintain a clear picture of your rental business finances.",
    },
    {
      icon: <FaBuilding className="text-orange-500 text-4xl" />,
      title: "Property Listings",
      description:
        "Organize and showcase your properties with all essential details and photos.",
    },
    {
      icon: <FaWallet className="text-purple-500 text-4xl" />,
      title: "Online Payments",
      description:
        "Accept and manage rent payments directly through Rentify with secure payment integrations.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Features That Make Rentify Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
