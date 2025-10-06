import React from "react";
import {
  FaPenNib,
  FaUsers,
  FaBolt,
  // FaShareAlt,
  // FaPaintBrush,
  FaBrain,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaPenNib className="text-xl text-black" />,
    title: "Draw & Create",
    description: "Freehand drawing with multiple tools",
  },
  {
    icon: <FaUsers className="text-xl text-black" />,
    title: "Collaborate",
    description: "Work together in real-time",
  },
  {
    icon: <FaBrain className="text-xl text-black" />,
    title: "AI Powered",
    description: "Generate and organize diagrams",
  },
  {
    icon: "",
    title: "Easy Sharing",
    description: "Share boards with a simple link",
  },
  {
    icon: "",
    title: "Customizable",
    description: "Colors, shapes, and sticky notes",
  },
  {
    icon: <FaBolt className="text-xl text-black" />,
    title: "Fast & Smooth",
    description: "Optimized for performance",
  },
];

const Features = () => {
  return (
    <section className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-8 flex flex-col gap-1 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-2">
            {feature.icon}
            <h2 className="font-semibold text-black">{feature.title}</h2>
          </div>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
