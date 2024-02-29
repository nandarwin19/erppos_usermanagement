import React from "react";
import Card from "./Card";
import { cardData } from "../utils/data";

const Cards = () => {
  return (
    <div className="w-full grid grid-cols-2 tablet:grid-cols-4 gap-8">
      {cardData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default Cards;
