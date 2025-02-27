import React from "react";

function Card(props) {
  console.log("Props::", props.cardProps.image); // Check props in console

  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.cardProps.image} alt={props.name} />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{props.cardProps.name}</p>
          <p className="font-medium text-gray-500">{props.cardProps.occupation}</p>
        </div>
        <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
          Message
        </button>
      </div>
    </div>
  );
}

export default Card;
