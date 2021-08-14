import React, { useState } from "react";

export const CardSelect = ({ options, orientation = "vertical" }) => {
  const [cardSelected, setCardSelected] = useState({});

  const handleCardSelected = (cardSelected) => {
    setCardSelected(cardSelected);
  };

  const hasPrice = (card) => {
    return card.hasOwnProperty("price") && card.price;
  };

  return (
    <div className="columns is-multiline mt-3">
      {options.map((card, idx) => (
        <div
          className={`column card-selected ${
            orientation === "vertical" ? "" : "is-full"
          } ${card === cardSelected ? "card-selected__active" : ""}`}
          key={idx}
          onClick={() => handleCardSelected(card)}
        >
          <div className="columns is-multiline is-mobile is-gapless">
            <div className="column is-full">
              <p className="title">{card.title}</p>
            </div>
            <div className="column is full">
              <div className="columns is-mobile is-vcentered is-gapless">
                <div
                  className={`column ${hasPrice(card) ? "is-11" : "is-full"}`}
                >
                  <p className="content mt-2">{card.description}</p>
                </div>
                {hasPrice(card) && (
                  <div className="column is-1">
                    <p className="content price"> +${card.price}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
