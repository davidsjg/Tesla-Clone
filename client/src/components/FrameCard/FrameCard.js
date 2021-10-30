import React, { useState } from "react";

import image1 from "../images/Beartracks.JPG";

import { Card } from "react-bootstrap";
import styles from "./FrameCard.css";
import cn from "classnames";

export default function FrameCard({ card, trueFunction, falseFunction }) {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  function overMainChange(e) {
    console.log(e.target.textContent);
    e.target.style.background = "red";
    trueFunction(e.target.textContent);
  }
  function leaveMainChange(e) {
    e.target.style.background = "white";
    falseFunction(e.target.textContent);
  }

  return (
    <Card
      onMouseOver={overMainChange}
      onMouseLeave={leaveMainChange}
      style={{ width: "18rem" }}
      className={cn("cards ", {
        carShareTitle: card.class === "CarShare",
        jpwTitle: card.class === "JPW",
        beaverTitle: card.class === "BeaverFrames",
      })}
    >
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

// className={cn("card front", {
//   carShareTitle: card.class === "CarShare",
//   jpwTitle: card.class === "JPW",
//   beaverTitle: card.class === "BeaverFrames",
// })}
