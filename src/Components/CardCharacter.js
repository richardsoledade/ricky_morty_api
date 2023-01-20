import React from "react";
import "./CardCharacter.css";
import { Card } from "react-bootstrap";

export const CardCharacter = (props) => {
  return (
    <Card>
      <div className="item">
        <div className="image">
          <Card.Img src={props.person.image} />
        </div>
        <div className="info">
          <Card.Body>
            <Card.Title>
              Nome: <strong>{props.person.name}</strong>
            </Card.Title>
            <div className="cardSub">
              <Card.Subtitle>
                <strong>Espécie: </strong>
                {props.person.species}
              </Card.Subtitle>
              <Card.Subtitle>
                <strong>Origem: </strong>
                {props.person.origin.name}
              </Card.Subtitle>
              <Card.Subtitle>
                <strong>Episódios: </strong>
                {props.person.episode.length}
              </Card.Subtitle>
              <Card.Subtitle>
                <strong>ID: </strong>
                {props.person.id}
              </Card.Subtitle>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
