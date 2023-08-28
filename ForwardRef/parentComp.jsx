"use client";
import { useEffect, useRef } from "react";
import ForwardRefChild from "../components/ForwardRefChild";

export default function ForwardRef() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const func = () => {
    const nums = parseInt(Math.random() * 100);
    inputRef.current.value = nums;
  };
  return (
    <div>
      <h1 className="text-center mt-7 text-xl">Forward Ref Example</h1>
      <ForwardRefChild
        func={func}
        ref={inputRef}
        type={"text"}
        placeholder={"Input from another comp"}
      />
    </div>
  );
}
