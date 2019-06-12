
import React from "react";
import "./HeroCard.css";

const HeroCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", ".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default HeroCard;