import React from "react";
import "./css/EventCard.css";

function EventCard(props) {
  return (
    <div class="card">
      <img class="card-img-top" src={props.imageURL} alt="Card image cap" />
      <div class="card-body" />
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">{props.description}</p>
      <a href={props.registerationFormLink} class="btn btn-primary">
        Regsiter Now
      </a>
    </div>
  );
}

export default EventCard;
