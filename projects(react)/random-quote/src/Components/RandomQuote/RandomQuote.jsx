import React, { useState } from "react";

import "./RandomQuote.css";
import reload from "../Assets/reload.png";
import twitter from "../Assets/twitter.png";

export const RandomQuote = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "difficulties increases the nearer we get to the goal",
    author: "johann wolfang",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };
  const twitt = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text}by "${
        quote.author.split(",")[0]
      }"`
    );
  };

  loadQuotes();
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">-"{quote.author.split(",")[0]}"</div>
        <div className="icons">
          <img
            title="reload"
            src={reload}
            alt=""
            onClick={() => {
              random();
            }}
          />
          <img
            title="tweet"
            src={twitter}
            alt=""
            onClick={() => {
              twitt();
            }}
          />
        </div>
      </div>
    </div>
  );
};
