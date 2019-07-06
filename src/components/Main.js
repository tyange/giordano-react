import React from "react";
import { CardDeck, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import styled from "styled-components";
import "../assets/font.css";

const NewArrival = styled.div`
  overflow: hidden;
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
  .card:first-child{
    margin-left:0;
  }
  .card:last-child {
    margin-right: 0;
  }
  .card-title {
    font-family: Noto Sans KR;
  }
  .card-text {
    font-family: Noto Sans KR;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .card-img-top {
    width: 200px;
    margin: auto;
    border-radius: calc(0.25rem - 1px);
  }
  .list-group-item {
    border: none;
    font-family: Noto Sans KR;
    font-weight: 400;
  }
`;

function Main() {
  return (
    <NewArrival>
      <h3>NEW ARRIVAL</h3>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require("../assets/item1_jean.jpg")} />
          <Card.Body>
            <Card.Title>크루넥 반팔 티셔츠</Card.Title>
            <Card.Text>
              면 100% 부드럽고 쾌적한 착용감의
              <br />
              기본 티셔츠
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 8,500</ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item6_shirts1.jpg")}
          />
          <Card.Body>
            <Card.Title>오픈카라 반팔셔츠</Card.Title>
            <Card.Text>
              전체적으로 여유 있는 사이즈의
              <br />
              오픈 카라 디테일이 더해진
              <br />
              오픈 카라 반팔 셔츠
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 29,000</ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/item9_pants6.jpg")} />
          <Card.Body>
            <Card.Title>릴렉스핏 데님</Card.Title>
            <Card.Text>
              스트레치 소재를 이용해 편안한
              <br />
              세련된 핏의 데님
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 39,000</ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/item5_pants4.jpg")} />
          <Card.Body>
            <Card.Title>린넨 와이드 크롭 팬츠</Card.Title>
            <Card.Text>
              훌륭한 통기성의 린넨 소재,
              <br />
              하이웨스트 스타일 와이드핏 팬츠
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 35,000</ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item10_shirts3.jpg")}
          />
          <Card.Body>
            <Card.Title>코튼 린넨 크롭 루즈핏 셔츠</Card.Title>
            <Card.Text>
              린넨과 코튼 최적 비율 혼방으로
              <br />
              착용 시 구김과 까끌거림을 최소화,
              <br />
              아름다운 색감을 구현한 셔츠
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 39,800</ListGroupItem>
          </ListGroup>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/item8_shirts2.jpg")}
          />
          <Card.Body>
            <Card.Title>셀레브리티 린넨 100% 셔츠</Card.Title>
            <Card.Text>
              린넨 100% 소재로
              <br />
              완벽한 통기성!
              <br />
              다양한 컬러로 다양한 코디!
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>￦ 59,800</ListGroupItem>
          </ListGroup>
        </Card>
      </CardDeck>
    </NewArrival>
  );
}

export default Main;
