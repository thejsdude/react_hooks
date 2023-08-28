"use client";
import { useRef } from "react";

export default function ReactRef() {
  const inputRef = useRef();
  const textRef = useRef();
  const handleSubmit = () => {
    const nums = parseInt(Math.random() * 1000);
    inputRef.current.value = nums;
    if (inputRef.current.value % 2 == 0) {
      inputRef.current.style.color = "green";
      textRef.current.style.display = "block";
    } else {
      textRef.current.style.display = "none";
      inputRef.current.style.color = "black";
    }
  };
  return (
    <div>
      <h1 className="text-center mt-4 text-xl">Usage of React useRef hooks</h1>
      <div className="mt-5 flex flex-col w-52 mx-auto">
        <input
          ref={inputRef}
          type="text"
          placeholder="Please enter a text"
          className="border-2 border-black rounded text-center font-semibold py-5"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-400 rounded  px-4 py-1 font-bold font-mono block mt-4"
        >
          Handle Submit
        </button>
        <h4
          ref={textRef}
          className="text-center my-3 text-green-600 font-semibold hidden"
        >
          Wow! It's a even number{" "}
        </h4>
      </div>
    </div>
  );
}
