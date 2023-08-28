import React, { useState } from "react";
import MemoChild from "../MemoChild/MemoChild";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [isPlay, setPlay] = useState(false);

  // Unnecessary component rendering bondho korar jonno React.memo use kora hoy. Jemon ekhane Count change hole <MemoChild/> component render hocche it's unnecessary. eita bondho korar jonno amra child component ta  k return korar somoy React.memo()/memo() er bhitore wrap kore dibo

  return (
    <div className="text-center">
      <h1 className="text-center my-7 text-xl">React.Memo {count}</h1>
      <MemoChild isplay={isPlay}></MemoChild>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 rounded px-4 py-2 font-semibold mx-3 my-3"
      >
        Increase
      </button>
      <button
        onClick={() => setPlay(!isPlay)}
        className="bg-green-500 rounded px-4 py-2 font-semibold mx-3 my-3"
      >
        Toggle
      </button>
    </div>
  );
};
export default ReactMemo;
