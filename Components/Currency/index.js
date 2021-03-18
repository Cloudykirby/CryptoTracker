import React from "react";

const Currency = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h1>Crypto</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Currency;
