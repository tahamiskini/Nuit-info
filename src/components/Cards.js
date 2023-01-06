import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  const [cardinfo, setCardinfo] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/cards") //  Im actually using a package called json server which will allow us to build fake REST API using a json file
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCardinfo(data);
      });
  }, []);

  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardinfo &&
              cardinfo.map((card) => (
                <CardItem
                  src={card.src}
                  text={card.text}
                  label={card.Adventure}
                  path={card.path}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
