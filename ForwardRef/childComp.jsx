"use client";

import React from "react";

function ForwardRefChild({ type, placeholder, func }, ref) {
  return (
    <div className="mt-4">
      <div className="flex flex-col mx-auto w-52">
        <input
          ref={ref}
          className="border py-1 border-black rounded text-center"
          type={type}
          placeholder={placeholder}
        />
        <button
          onClick={func}
          className="bg-blue-500 rounded px-4 py-2 text-white block mt-4"
        >
          Handle Input Ref
        </button>
      </div>
    </div>
  );
}

const forwardRefInput = React.forwardRef(ForwardRefChild);
export default forwardRefInput;
