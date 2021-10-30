import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./App.css";
import FrameCard from "./components/FrameCard/FrameCard";

function App() {
  let tempArray = [
    {
      title: "Card1",
    },
    {
      title: "Card2",
    },
    {
      title: "Card3",
    },
    {
      title: "Card4",
    },
    {
      title: "Card5",
    },
  ];
  let card1 = false;

  function trueFunction() {
    card1 = true;
    console.log(card1);
  }
  function falseFunction() {
    card1 = false;
    console.log(card1);
  }

  return (
    <Container className="mainContain">
      <Row>
        <Row>
          <Col sm={4}>
            <Container className="cardContain">
              {tempArray.map((card, index) => {
                return (
                  <FrameCard
                    key={index}
                    card={card}
                    trueFunction={trueFunction}
                    falseFunction={falseFunction}
                  />
                );
              })}
            </Container>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;

// className={cn("card front", {
//   carShareTitle: card.class === "CarShare",
//   jpwTitle: card.class === "JPW",
//   beaverTitle: card.class === "BeaverFrames",
// })}
