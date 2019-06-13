import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import styled from "styled-components";
import "../assets/font.css";

const Styles = styled.div`
  h3 {
    text-align: center;
    font-weight: 10em;
    margin: 130px 0 100px 0;
    font-family: Baloo;
  }
  .card {
    text-align: center;
    border: none;
    cursor: pointer;
  }
  .card-title {
    font-family: Noto Sans KR;
  }
  .card-img-top {
    width: 200px;
    margin: auto;
    border-radius: calc(0.25rem - 1px);
  }
`;

function Main() {
  return (
    <Styles>
      <h3>NEW ARRIVAL</h3>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require("../assets/item1_jean.jpg")} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item6_shirts1.jpg")}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/item9_pants6.jpg")} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/item5_pants4.jpg")} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item10_shirts3.jpg")}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item8_shirts2.jpg")}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Styles>
  );
}

export default Main;
