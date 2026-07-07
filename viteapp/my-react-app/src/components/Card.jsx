import React from "react";

function Card({ userName, btnText = "peleaseeee" }) {
  //   console.log("props", props);

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://tailwindcss.com/_next/static/media/cover.0g8-x6e87bh6a.png"
        />
      </div>
      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">{userName}</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
        <button
          className="bg-pink-50 p-6 text-teal-950 cursor-pointer rounded-2xl border-2 border-black hover:text-2xl hover:border-solid hover:text-black
"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
