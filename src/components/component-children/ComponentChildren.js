import React from "react";

const ComponentChildren = ({ children, otherProp }) => {
  return (
    <>
      <h1>{otherProp}</h1>
      {children}
    </>
  );
};

export default ComponentChildren;