import React from "react";
// import Button from "./Button"

const Container = () => {
  return (
    <div className="grid grid-cols-1">
      <h1 className="text-2xl text-center p-2">Stalk Market CO</h1>
      <div className="grid grid-cols-1">
      <p className="text-center divide-y divide-black">
          <a className="btn p-2 hover:underline" href="./home">Home</a>
          <a className="btn p-2 hover:underline" href="./about">About</a>
          <a className="btn p-2 hover:underline" href="./contact">Contact Us</a>
      </p>
      </div>
    </div>
  );
};

export default Container;