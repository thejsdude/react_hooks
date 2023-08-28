import React from "react";

const MemoChild = ({ isplay }) => {
  console.log(isplay);
  return (
    <div>
      <h1>Isplay? {isplay.toString()}</h1>
    </div>
  );
};
export default React.memo(MemoChild);
