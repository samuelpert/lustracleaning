import React from "react";
import CardItem from "./CardItem";

const Cards: React.FC = () => {
  return (
    <div className="cards">
      <h1 className="cards-heading">Our Premium Cleaning Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/image-1.jpg"
              text="Post-construction cleaning for new builds and renovations"
              label="Construction"
              path="/services"
            />
            <CardItem
              src="/image-2.jpg"
              text="Thorough house cleaning for a spotless, welcoming home"
              label="House"
              path="/services"
            />
            <CardItem
              src="/image-3.jpg"
              text="Professional cleaning for offices, retail, and other businesses"
              label="Comercial"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
