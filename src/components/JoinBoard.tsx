import React from "react";

const JoinBoard = () => {
  return (
    <section className="w-96 h-max mb-2 rounded-xl bg-white p-4">
      <div>
        <h1 className="font-bold">Join Board</h1>
        <p className="text-sm">Enter a board ID to collaborate</p>
      </div>
      <input
        type="text"
        className="bg-gray-200 rounded-md px-2 my-3"
        placeholder="Enter board ID"
      />
      <button className="w-88  p-1 border border-solid  rounded-md mt-2 hover:cursor-pointer">
        Join Board
      </button>
    </section>
  );
};

export default JoinBoard;
