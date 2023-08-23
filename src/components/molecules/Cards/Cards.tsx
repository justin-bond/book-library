import React, { ReactNode } from "react";

import Card from "@/components/atoms/Card";

import "./Cards.scss";

interface CardsProps {
  items: any[];
  itemView: (data: any) => ReactNode;
}

const Cards = ({ items, itemView }: CardsProps) => {
  if (!items?.length) return;

  return (
    <div className="cards">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Card>{itemView(item)}</Card>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Cards;
