import CreateNewBoard from "@/components/CreateNewBoard";
import Features from "@/components/Features";
import JoinBoard from "@/components/JoinBoard";
import React from "react";

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 to-pink-100 w-full min-h-screen flex flex-col items-center">
      <div className="mt-20">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold my-4 bg-gradient-to-r from-blue-500 to-pink-400 bg-transparent bg-clip-text text-transparent">
            CollabBoard
          </h1>
          <p className="text-gray-600">
            Create, collaborate, and bring your ideas to the life with an
            intutive whiteboard experince
          </p>
        </div>
      </div>
      <div className="flex gap-4 my-20">
        <CreateNewBoard />
        <JoinBoard />
      </div>
      <div className="flex flex-col items-center my-8">
        <h1 className="text-4xl font-bold">Features</h1>
        <Features />
      </div>
    </section>
  );
};

export default Home;
