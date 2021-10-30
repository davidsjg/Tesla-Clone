import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./App.css";
import FrameCard from "./components/FrameCard/FrameCard";
import cn from "classnames";

import lake from "./components/images/Snow.JPG";
import lake1 from "./components/images/Beartracks.JPG";
import lake2 from "./components/images/Heart.JPG";

function App() {
  let oldPicture = lake1;
  let newPicture = lake2;
  let cardCont = document.getElementById("cardContainer");
  let tempPicture;
  let Card11 = "./components/images/Snow.JPG";
  let Card21 = "./components/images/Beartracks.JPG";
  let Card31 = "./components/images/Heart.JPG";
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [oldPic, setOldPic] = useState(lake);
  const [newPic, setNewPic] = useState(lake1);

  console.log(cardCont);

  {
    cardCont !== null &&
      cardCont.find("div").hover(function () {
        cardCont.css({ backgroundColor: "red" });
      });
  }

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
  let card2 = false;
  let picture = "";

  function trueFunction(card) {
    // card = true;

    switch (card) {
      case "Card1":
        setIsShown1(true);

        setNewPic(lake1);

        break;
      case "Card2":
        setIsShown2(true);
        break;

      default:
        break;
    }
  }
  function falseFunction(card) {
    switch (card) {
      case "Card1":
        setIsShown1(false);
        break;
      case "Card2":
        setIsShown2(false);
        break;

      default:
        break;
    }
  }

  function trueFunction2(card) {
    setIsShown2(true);
  }
  function falseFunction2() {
    card2 = false;
    setIsShown2(false);
  }

  return (
    <Container
      id="cardContainer"
      className={cn("container", {
        mainContain: card1 === false,
        // card1Contain: card1 === true,
      })}
    >
      {/* <div className="mainImage">
        {isShown1 && <Image src={lake1} rounded className="mainImage" />}
        {isShown2 && <Image src={lake2} rounded className="mainImage" />}
      </div> */}
      {/* <div className="mainImage">
        {isShown1 &&         <img src={lake1} className="lower-image" />}
        {isShown2 &&         <img src={lake2} class="upper-image" />}
      </div> */}

      <Container className="container1">
        {/* <img src={lake1} className="lower-image" />
        <img src={lake2} class="upper-image" /> */}

        {!isShown1 && <img src={oldPic} className="lower-image" />}

        {isShown1 && <img src={oldPic} className="lower-image" />}
        {isShown1 && <img src={newPic} class="upper-image" />}
      </Container>

      <Container className="test1">
        <button className="testButton">sup yall</button>
      </Container>
      {/* <Container>
        <img src="https://picsum.photos/id/100/400/300" />
        <img src="https://picsum.photos/id/200/400/300" class="upper-image" />
      </Container> */}

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
                    trueFunction2={trueFunction2}
                    falseFunction2={falseFunction2}
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
