import React, { useMemo, useState } from "react";

export default function ReactUseMemo() {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);
  const result = () => {
    console.log("Unnecessary Rendering");
    return count * 2;
  };
  //   Unnecessary function call and invoke bondho korar jonne useMemo() hook use kora hoy. Jemon ekhane count er upor depend kore amra ekta calculation kortechi ar protibar count change hoile value o change hocche. but when amra multiply kortechi tokhon kintu calculation hocche na and result DOM a change hocche na but function call hocche. Eita bondho korar jonne amra use korbo useMemo() hook. First parameter hisebe eta ekta callback function ney and second parameter hisbe ney ekta dependency. Jeitar upor depend kore se change hobe. That's it

  const MemoisedResult = useMemo(() => {
    console.log("Unnecessary Rendering");
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1 className="text-center my-3 text-2xl">React Use Memo: {count}</h1>
      <h1 className="text-center my-3 text-2xl">Multiply: {multiply}</h1>
      <h3 className="text-red-400 font-bold text-xl">{MemoisedResult}</h3>
      <button
        className="bg-red-400 rounded px-4 py-3 mt-4 text-white font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
      <button
        className="bg-red-400 rounded px-4 py-3 mt-4 text-white font-semibold mx-2"
        onClick={() => setMultiply(multiply * 5)}
      >
        Multiply
      </button>
    </div>
  );
}
