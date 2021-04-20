import React from "react";
import '../assets/Container.css';
// import Button from "./Button"

const Container = () => {
  return (
    <div>
      <h1 className="text-2xl text-center p-2">Stalk Market CO</h1>
      <div className="grid grid-cols-1">
      <p className="text-center divide-y divide-black">
          <a className="btn p-2 hover:underline" href="./home">HOME</a>
          <a className="btn p-2 hover:underline" href="./about">ABOUT</a>
          <a className="btn p-2 hover:underline" href="./contact">CONTACT US</a>
      </p>
      </div>
    </div>
  );
};

export default Container;