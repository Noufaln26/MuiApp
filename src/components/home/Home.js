import React from "react";

import Card from "../cardview/Card";
import Features from "../features/Features";

//this component will host loader spinner , filter , and toggle

function Home() {
  return (
    <>
      <Features />

      <Card />
    </>
  );
}

export default Home;
